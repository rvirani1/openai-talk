import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
export const OPEN_AI_CONFIG = new OpenAIApi(configuration)
