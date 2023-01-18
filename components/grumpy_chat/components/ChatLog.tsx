import { useSnapshot } from 'valtio'
import cn from 'classnames'
import { grumpyProxy, Speaker } from '@/components/grumpy_chat/grumpyProxy'

export default function ChatLog () {
  const { chatMessages } = useSnapshot(grumpyProxy)
  return (
    <fieldset className="border-gray-200">
      <legend className="sr-only">Notifications</legend>
      <div className="divide-y divide-gray-200">
        {chatMessages.map((chatMessage) => (
          <div className="relative flex items-start py-4" key={chatMessage.id}>
            <div className="min-w-0 flex-1 text-sm">
              <div
                className={
                cn(
                  'font-medium text-gray-700',
                  chatMessage.speaker === Speaker.User ? 'text-left' : 'text-right'
                )
              }>
                {chatMessage.speaker}
              </div>
              <p className="text-gray-500">
                {chatMessage.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  )
}
