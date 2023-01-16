'use client'

import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useSnapshot } from 'valtio'
import { useKey } from 'react-use'
import { setCurrentPage, transitionLeft, transitionRight } from '@/app/slides/utils'
import { animationProxy } from '@/app/slides/animationProxy'

export default function Layout ({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const { direction } = useSnapshot(animationProxy)
  useKey('ArrowLeft', transitionLeft(router))
  useKey('ArrowRight', transitionRight(router))

  setCurrentPage(pathname)

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <React.Fragment key={pathname}>
        {children}
      </React.Fragment>
    </AnimatePresence>
  )
}
