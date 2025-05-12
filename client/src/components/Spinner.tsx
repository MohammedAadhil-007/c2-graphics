import React from 'react'

const Spinner = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75 z-50'>
      <svg
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
        className='w-[100px]'
      >
        <circle
          className='stroke-blue-500 origin-center animate-spin'
          cx='50'
          cy='50'
          r='30'
          fill='transparent'
          strokeWidth={8}
          strokeDasharray={160}
        />
      </svg>
    </div>
  )
}

export default Spinner
