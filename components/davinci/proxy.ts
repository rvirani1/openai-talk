import { proxy } from 'valtio'

export enum Speaker {
  // eslint-disable-next-line no-unused-vars
  Bot = 'Bot',
  // eslint-disable-next-line no-unused-vars
  User = 'User'
}

export interface ChatMessage {
  id: string
  speaker: Speaker
  text: string
}

interface GrumpyProxy {
  chatMessages: ChatMessage[]
  isLoading: boolean
}

export const grumpyProxy = proxy<GrumpyProxy>({
  chatMessages: [],
  isLoading: false
})
