import Image from 'next/image'
import GrumpyGpt from './grumpy-gpt.png'
import Overview from '@/components/davinci/components/Overview'
import Form from '@/components/davinci/components/Form'
import ChatLog from '@/components/davinci/components/ChatLog'

export default function Container () {
  return (
    <div className="flex w-screen min-h-screen h-full flex-col bg-white pt-16 pb-12" style={{ backgroundColor: '#F7F7F6' }}>
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <Image src={GrumpyGpt} alt="Logo of a grumpy chat bot" className="h-32 w-auto" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-16 w-[30rem]">
            <Overview />
            <ChatLog />
            <Form />
          </div>
        </div>
      </main>
    </div>
  )
}
