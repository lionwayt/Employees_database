import React from 'react'
import { useAuth } from '../Context/authContext'

const Navbar = () => {
  const {user} = useAuth()
  return (
    <div className='flex  items-center text-white justify-between static h-20 bg-maryBlue px-5'>
        <p className='color-white p-6'>Welcome {user.name}</p>
        <button className='px-4 py-1 bg-maryOrange hover:bg-blue-800'>Logout</button>
    </div>
  )
}

export default Navbar