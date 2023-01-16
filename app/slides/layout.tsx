'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { AnimationContext } from '@/app/slides/AnimationContext'

export default function Layout ({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { direction } = React.useContext(AnimationContext)
  return (
    <AnimationContext.Provider value={{}}>
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <React.Fragment key={pathname}>
          {children}
        </React.Fragment>
      </AnimatePresence>
    </AnimationContext.Provider>

  )
}
