import React from 'react'
import Sidebar from '../EmployeeDashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'
import { Outlet } from 'react-router-dom'


const EmployeesDashboard = () => {
  return (
    <div className='flex'>
    <Sidebar/>

   
    <div className='flex-1 ml-64 bg-gray-200 h-screen'>
      <Navbar />
      <Outlet/>
      
    </div>
    </div>
  )
}

export default EmployeesDashboard