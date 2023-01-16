'use client'

import { Animated } from '@/app/slides/_components/Animated'

export default function Page () {
  // useEffect(() => { animationProxy.currentPage = 3 }, [])
  return (
    <Animated>
      <div className="bg-blue-400 w-full h-screen">
        I am page 3
      </div>
    </Animated>
  )
}
