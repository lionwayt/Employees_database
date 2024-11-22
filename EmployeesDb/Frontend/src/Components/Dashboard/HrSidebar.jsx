
import { NavLink } from 'react-router-dom'
import {FaBuilding, FaFileArchive, FaMoneyBill,  FaTachometerAlt, FaUsers, FaClipboardList} from 'react-icons/fa'
import logo from '../assets/logo.png'

const HrSidebar = () => {
  return (
    <div className='bg-white text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
        <div className='bg-maryBlue h-20 flex items-center justify-center'>
        <img className='logo w-20 h-20 p-2' src={logo} alt="" />
            <h3 className='text-2x1 text-center font-bold '>Employee Management</h3>
           
        </div>
        <div className='mt-6 space-y-6'>
            <NavLink to="/hr_dashboard"
            className={({isActive}) => `font-medium rounded-md py-2 px-5 transition duration-300 hover:bg-gradient-to-r from-maryBlue to-maryOrange
             ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" :
                 "text-gray-800"} flex items-center space-x-4 block py-2.5 px-4 rounded`
                }
            end
            > 
                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>

            <NavLink to="/hr_dashboard/employees"
            className={({isActive}) => `font-medium rounded-md py-2 px-5 transition duration-300 hover:bg-gradient-to-r from-maryBlue to-maryOrange
            ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" :
                "text-gray-800"} flex items-center space-x-4 block py-2.5 px-4 rounded`
               }
           > 
                <FaUsers/>
                <span>Employees</span>
            </NavLink>

            <NavLink to="/hr_dashboard/departments"
             className={({isActive}) => `font-medium rounded-md py-2 px-5 transition duration-300 hover:bg-gradient-to-r from-maryBlue to-maryOrange
             ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" :
                 "text-gray-800"} flex items-center space-x-4 block py-2.5 px-4 rounded`
                }> 
                <FaBuilding/>
                <span>Department</span>
            </NavLink>

            <NavLink to="/hr_dashboard/branches"
            className={({isActive}) => `font-medium rounded-md py-2 px-5 transition duration-300 hover:bg-gradient-to-r from-maryBlue to-maryOrange
            ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" :
                "text-gray-800"} flex items-center space-x-4 block py-2.5 px-4 rounded`
               }
          
           > 
                <FaMoneyBill/>
                <span>Branch</span>
            </NavLink>

            <NavLink to="/hr_dashboard/coordinators"
    className={({ isActive }) => `
        font-medium rounded-md py-2 px-5 transition duration-300 
        hover:bg-gradient-to-r from-maryBlue to-maryOrange
        ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" : "text-gray-800"}
        flex items-center space-x-4 block py-2.5 px-4 rounded
    `}
>
    <FaClipboardList /> {/* Example icon for projects, replace with the appropriate icon */}
    <span>Project Coordinator</span>
</NavLink>

            <NavLink to="/hr_dashboard/projects"
    className={({ isActive }) => `
        font-medium rounded-md py-2 px-5 transition duration-300 
        hover:bg-gradient-to-r from-maryBlue to-maryOrange
        ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" : "text-gray-800"}
        flex items-center space-x-4 block py-2.5 px-4 rounded
    `}
>
    <FaClipboardList /> {/* Example icon for projects, replace with the appropriate icon */}
    <span>Projects</span>
</NavLink>

            <NavLink to="/hr_dashboard/leave"
            className={({isActive}) => `font-medium rounded-md py-2 px-5 transition duration-300 hover:bg-gradient-to-r from-maryBlue to-maryOrange
            ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" :
                "text-gray-800"} flex items-center space-x-4 block py-2.5 px-4 rounded`
               }
          
           > 
                <FaFileArchive/>
                <span>Leave</span>
            </NavLink>

            

            <NavLink to="/hr_dashboard/Setting"
            className={({isActive}) => `font-medium rounded-md py-2 px-5 transition duration-300 hover:bg-gradient-to-r from-maryBlue to-maryOrange
            ${isActive ? "bg-gradient-to-r from-maryBlue to-maryOrange text-white" :
                "text-gray-800"} flex items-center space-x-4 block py-2.5 px-4 rounded`
               }
           
           >  
                <FaFileArchive/>
                <span>Setting</span>
            </NavLink>
        </div>
    </div>
    
  )
}

export default HrSidebar