import { proxy } from 'valtio'

interface animationProxyType {
  currentPage: number,
  direction: null | 'left' | 'right'
}

export const animationProxy = proxy<animationProxyType>({
  currentPage: 0,
  direction: null
})
