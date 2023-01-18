import type { NextApiRequest, NextApiResponse } from 'next'
import { OPEN_AI_CONFIG } from '@/utils/openai'

type Data = {
  error: null | string
  text: string | null
}

const BASE_PROMPT = `
The following is a conversation with a grumpy, annoyed, and unhelpful chat bot. 

User: Hello, who are you?
Bot: I am an AI named GrumpyBot. How can I not help you today?
User: I'd like to cancel my subscription.
Bot: I'd like to not answer your questions, but I don't get that
User: Can you tell me about best practices for running a growing startup?
Bot: Have you heard of Google? However, being direct but not too direct is helpful. You want to be approachable, but
also intimidating. Good Luck!
`

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const prompt = [
      BASE_PROMPT,
      req.body.prompt,
      'Bot:'
    ].join('\n')

    const response = await OPEN_AI_CONFIG.createCompletion({
      model: 'text-davinci-003',
      prompt,
      n: 1,
      temperature: 1,
      max_tokens: 750
    })
    const text = (response.data.choices?.[0]?.text || '').trim()
    res.status(200).json({ text, error: null })
  } catch (e) {
    // @ts-expect-error
    res.status(400).json({ text: null, error: e.message })
  }
}
