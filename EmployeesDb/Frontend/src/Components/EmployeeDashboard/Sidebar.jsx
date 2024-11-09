
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import {FaBuilding,
        FaCalendarAlt,
        FaTachometerAlt,
        FaUser
      } from 'react-icons/fa'
      import { useAuth } from '../Context/authContext'


const Sidebar = () => {
  const {user} = useAuth()
  return (
    <div className='bg-slate-400 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
        <div className='bg-maryBlue h-20 flex items-center justify-center'>
        <img className='logo w-20 h-20 p-2   ' src={logo} alt="" />
            <h3 className='text-2x1 text-center font-bold  '>Employee Page</h3>
           
        </div>
        <div className='px-4'>
            <NavLink to="/employee_dashboard"
             className={({isActive}) => 
             `${isActive ? "bg-maryOrange" : ""

             } flex items-center space-x-4 block py-2.5 px-4 rounded`
         }
            end
    > 
                <FaTachometerAlt />
                <span>Dashboard</span>
             </NavLink>

            <NavLink 
             to={`/employee_dashboard/profile/${user._id}`}
             className={({isActive}) =>
                `${isActive ? "bg-maryOrange" : ""
  
                } flex items-center space-x-4 block py-2.5 px-4 rounded`
              } 
          >
                <FaUser/>
                <span>My Profile</span>
             </NavLink>

            <NavLink to="/employee_dashboard/leave"
             className={({isActive}) =>
              `${isActive ? "bg-maryOrange" : ""

              } flex items-center space-x-4 block py-2.5 px-4 rounded`
            } 
        >
                <FaBuilding/>
                <span>Leave</span>
             </NavLink>


             <NavLink to="/employee_dashboard/setting"
            className={({isActive}) =>
                `${isActive ? "bg-maryOrange" : ""
  
                } flex items-center space-x-4 block py-2.5 px-4 rounded`
             }
         >
                <FaCalendarAlt/>
                <span>Setting</span>
             </NavLink>

           
        </div>
    </div>
    
  )
}

export default Sidebar