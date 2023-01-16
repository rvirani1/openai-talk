'use client'

import { animationProxy } from '@/app/slides/animationProxy'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'
import { snapshot } from 'valtio'

const TOTAL_PAGES = 4

export const setCurrentPage = (pathname: string | null) => {
  if (!pathname) return
  const pageSegment = pathname.split('/').at(-1)
  if (!pageSegment) return
  animationProxy.currentPage = parseInt(pageSegment, 10)
}

const navigateToPage = (pageNumber: number, router: AppRouterInstance) => {
  const pageSegment = pageNumber.toString().padStart(2, '0')
  router.push(`/slides/${pageSegment}`)
}

export const transitionLeft = (router: AppRouterInstance) => () => {
  const { currentPage } = snapshot(animationProxy)
  if (currentPage <= 1) return
  const newPage = currentPage - 1
  animationProxy.direction = 'left'
  navigateToPage(newPage, router)
}

export const transitionRight = (router: AppRouterInstance) => () => {
  const { currentPage } = snapshot(animationProxy)
  if (currentPage >= TOTAL_PAGES) return
  const newPage = currentPage + 1
  animationProxy.direction = 'right'
  navigateToPage(newPage, router)
}
