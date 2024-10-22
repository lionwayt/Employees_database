
import { Outlet } from 'react-router-dom'
import HrSidebar from '../Dashboard/HrSidebar.jsx'
import Navbar from '../Dashboard/Navbar.jsx'



const HrDashboard = () => {
 

  
  return (
   <div className='flex'>
    
    <HrSidebar />

   
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
      <Navbar />
    <Outlet/>
      
    </div>
    </div>
  )
}

export default HrDashboard