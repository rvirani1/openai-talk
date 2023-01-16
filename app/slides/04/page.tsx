'use client'

import { Animated } from '@/app/slides/_components/Animated'

export default function Page () {
  // useEffect(() => { animationProxy.currentPage = 4 }, [])
  return (
    <Animated>
      <div className="bg-amber-400 w-full h-screen">
        I am page 4
      </div>
    </Animated>
  )
}
