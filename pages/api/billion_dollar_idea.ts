import type { NextApiRequest, NextApiResponse } from 'next'
import { randProductName } from '@ngneat/falso'
import { OPEN_AI_CONFIG } from '@/utils/openai'

type Data = {
  error: null | string
  productName: string | null
  imageUrl: string | null
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const productName = randProductName()
    const response = await OPEN_AI_CONFIG.createImage({
      prompt: productName,
      n: 1,
      size: '512x512'
    })
    const imageUrl = (response.data.data?.[0]?.url || '').trim()
    res.status(200).json({ productName, imageUrl, error: null })
  } catch (e) {
    // @ts-expect-error
    res.status(400).json({ productName: null, imageUrl: null, error: e.message })
  }
}
