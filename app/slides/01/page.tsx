'use client'

import { Animated } from '@/app/slides/_components/Animated'

export default function Page () {
  // useEffect(() => { animationProxy.currentPage = 1 }, [])
  return (
    <Animated>
      <div className="bg-purple-700 w-full h-screen">
        I am page 1
      </div>
    </Animated>
  )
}
