import { proxy } from 'valtio'
interface DalleProxy {
  imageUrl: string | null
  isLoading: boolean
  productName: string | null
}

export const dalleProxy = proxy<DalleProxy>({
  imageUrl: null,
  isLoading: false,
  productName: null
})
