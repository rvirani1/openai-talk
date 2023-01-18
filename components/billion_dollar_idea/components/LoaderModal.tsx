import React from 'react'
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'

export default function LoaderModal () {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
      style={{ background: 'rgba(0, 0, 0, 0.3)' }}
    >
      <div className="bg-white border py-4 px-5 rounded-lg flex items-center flex-col">
        <div className="text-gray-500 text-l font-medium mt-2 flex flex-col items-center justify-center">
          <ArrowPathRoundedSquareIcon
            className="h-12 w-12 my-2 mr-2 text-green-600 animate-spin-slow"
            aria-hidden="true"
          />
          Consulting the wizards...
        </div>
      </div>
    </div>
  )
}
