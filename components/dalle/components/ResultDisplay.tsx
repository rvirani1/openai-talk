import { useSnapshot } from 'valtio'
import cn from 'classnames'
import { Caveat } from '@next/font/google'
import { dalleProxy } from '@/components/dalle/dalleProxy'

const caveat = Caveat({ subsets: ['latin'] })

export default function ResultDisplay () {
  const { isLoading, productName, imageUrl } = useSnapshot(dalleProxy)
  if (isLoading) return null
  if (!productName && !imageUrl) return null
  return (
    <div className="border-t pt-12 flex flex-col justify-center items-center space-y-8">
      <h2 className={cn('text-4xl font-bold text-center tracking-wider', caveat.className)}>
        {productName}!
      </h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="w-[28rem] h-[28rem] border shadow-xl rounded-lg"
        src={imageUrl || ''}
        alt={productName || ''}
      />
    </div>
  )
}
