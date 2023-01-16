import React from 'react'
import { motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { animationProxy } from '@/app/slides/animationProxy'

const variants = {
  enter: (direction: 'left' | 'right') => {
    return {
      x: direction === 'right' ? 1000 : -1000,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: 'left' | 'right') => {
    return {
      zIndex: 0,
      x: direction === 'left' ? 1000 : -1000,
      opacity: 0
    }
  }
}

export const Animated = ({ children }: { children: React.ReactNode}) => {
  const { direction } = useSnapshot(animationProxy)
  return (
    <motion.div
      initial="enter"
      animate="center"
      custom={direction}
      exit="exit"
      variants={variants}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  )
}
