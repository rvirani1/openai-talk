'use client'

import { Animated } from '@/app/slides/Animated'
import Link from 'next/link'

export default function Page () {
  return (
    <Animated>
      <h1>I am page 2</h1>
      <Link href="/slides/02">Left</Link>
    </Animated>
  )
}
