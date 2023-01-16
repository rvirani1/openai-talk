import React from 'react'

interface AnimationContextType {
  direction?: 'left' | 'right' | null
}
export const AnimationContext = React.createContext<AnimationContextType>({ direction: null })
