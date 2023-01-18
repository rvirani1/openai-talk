import React, { useState } from 'react'
import axios from 'axios'
import { useSnapshot } from 'valtio'
import { ArrowPathRoundedSquareIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { grumpyProxy, Speaker } from '@/components/davinci/grumpyProxy'

export default function Form () {
  const [userInput, setUserInput] = useState('')
  const { isLoading } = useSnapshot(grumpyProxy)

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => { setUserInput(e.currentTarget.value) }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      grumpyProxy.chatMessages = [
        ...grumpyProxy.chatMessages,
        {
          id: crypto.randomUUID(),
          speaker: Speaker.User,
          text: userInput
        }
      ]
      grumpyProxy.isLoading = true
      const prompt = grumpyProxy.chatMessages
        .map(cm => `${cm.speaker}: ${cm.text}`)
        .join('\n') + `User: ${userInput}`
      setUserInput('')
      const response = await axios({
        method: 'post',
        url: '/api/grumpy_chat',
        data: { prompt }
      })
      grumpyProxy.chatMessages = [
        ...grumpyProxy.chatMessages,
        {
          id: crypto.randomUUID(),
          speaker: Speaker.Bot,
          text: response.data.text || ''
        }
      ]
    } catch (e) {
      // @ts-expect-error
      window.alert = e.message
    } finally {
      grumpyProxy.isLoading = false
    }
  }

  return (
    <form className="relative mt-1 rounded-md shadow-sm" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        value={userInput}
        className="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="What do you want?"
      />
      <button
        className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3"
        type="submit"
      >
        {isLoading
          ? <ArrowPathRoundedSquareIcon className="h-5 w-5 text-gray-400 animate-spin" aria-hidden="true" />
          : <PaperAirplaneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        }
      </button>
    </form>
  )
}
