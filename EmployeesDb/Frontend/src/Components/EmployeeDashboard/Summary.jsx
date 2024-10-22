import React from 'react'
import { FaUser } from 'react-icons/fa'

const Summary = () => {
  return (
    <div className='p-6'>
    <div className='rounded flex bg-white'>
        <div className={`text-3x1 flex justify-center items-center bg-maryBlue text-white px-4`}>
            {<FaUser/>}
        </div>
        <div className='pl-4 py-1'>
            <p className='text-lg font-semibold'>Welcome Back</p>
            <p className='text-x1 font-bold'>user</p>
        </div>
    </div>
    </div>
  )
}

export default Summary