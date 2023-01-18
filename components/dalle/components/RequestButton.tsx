import { CurrencyDollarIcon } from '@heroicons/react/20/solid'
import { useSnapshot } from 'valtio'
import axios from 'axios'
import { dalleProxy } from '@/components/dalle/dalleProxy'

export default function RequestButton () {
  const { isLoading } = useSnapshot(dalleProxy)
  const handleClick = async () => {
    try {
      dalleProxy.productName = null
      dalleProxy.isLoading = true
      const response = await axios({
        method: 'post',
        url: '/api/billion_dollar_idea'
      })
      dalleProxy.productName = response.data.productName
      dalleProxy.imageUrl = response.data.imageUrl
    } catch (e) {
      // @ts-expect-error
      window.alert = e.message
    } finally {
      dalleProxy.isLoading = false
    }
  }
  return (
    <div className="flex justify-center my-12">
      <button
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <CurrencyDollarIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
        Show me the money!
      </button>
    </div>
  )
}
