import React from 'react'

const Failure = () => {
  return (
    <div className='bg-red-100 w-72 p-2 rounded-xl flex flex-col mt-20 mr-2 border-2 border-red-200 justify-end float-right'>
        <h1 className='text-red-600 font-bold'>Error!</h1> 
        <p className='text-red-600 font-semibold'>Enter the credentials again!</p>
      </div>
  )
}

export default Failure
