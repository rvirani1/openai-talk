import { useSnapshot } from 'valtio'
import { dalleProxy } from '@/components/billion_dollar_idea/dalleProxy'
import Overview from '@/components/billion_dollar_idea/components/Overview'
import RequestButton from '@/components/billion_dollar_idea/components/RequestButton'
import ResultDisplay from '@/components/billion_dollar_idea/components/ResultDisplay'
import LoaderModal from '@/components/billion_dollar_idea/components/LoaderModal'
import Image from 'next/image'
import MoneyMachineImage from '@/components/billion_dollar_idea/money-machine.png'
import AttributionFooter from '@/components/shared/AttributionFooter'

export default function Container () {
  const { isLoading } = useSnapshot(dalleProxy)
  return (
    <>
      <div className="flex min-h-screen h-full w-full flex-col bg-white pt-16 pb-2">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Image src={MoneyMachineImage} alt="Logo of a grumpy chat bot" className="h-48 w-auto" />
          </div>
          <div className="py-16">
            <Overview />
            <RequestButton />
            <ResultDisplay />
            {isLoading && <LoaderModal />}
          </div>
        </main>
      </div>
      <AttributionFooter />
    </>
  )
}
