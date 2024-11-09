import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/authContext'

const LeaveList = () => {
     const {user} = useAuth()
    const [leaves, setLeaves]= useState([])
   let no = 1;

    const fetchLeaves = async () => {

        try{
            const response = await axios.get(`https://mjemployeemanagment.onrender.com/leave/${user._id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            if (response.data.success){
                setLeaves(response.data.leaves);
              
                
            }
        } catch (error){
            if (error.response && !error.response.data.success){
                alert(error.message);
            }
        }
    };

    useEffect(() => {
        fetchLeaves();
    }, []); 

  return (
    <div className='p-6'>
        <div className='text-center'>
            <h3 className='text-2-1 font-bold'>Manage Leaves</h3>
        </div>
        <div className='flex justify-between items-center'>
            <input 
              type="text" 
              placeholder='search'
              className='px-4 py-0.5 border'
              />
              <Link to="/employee_dashboard/add-leave"
                    className='px-4 py-1 bg-maryBlue  text-white rounded'>
                        Add New Leave
                        </Link>

        </div>
        <table className='w-full text-sm text-left text-gray-500 mt-6'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200'>
            <tr>
                <th className='px-6 py-3'>NO</th>
                <th className='px-6 py-3'>Leave Type</th>
                <th className='px-6 py-3'>From</th>
                <th className='px-6 py-3'>To</th>
                <th className='px-6 py-3'>Description</th>
                <th className='px-6 py-3'>Applied Date</th>
                <th className='px-6 py-3'>Status</th>
            </tr>
            </thead>
          <tbody>
            {leaves.map((leave) => (
            <tr
             key={leave._id}
             className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
             >
                <td className='px-6 py-3'>{no++}</td>
                <td className='px-6 py-3'>{leave.leaveType}</td>
                <td className='px-6 py-3'>{new Date (leave.startDate).toLocalDateString()}</td>
                <td className='px-6 py-3'>{new Date (leave.endDate).toLocalDateString()}</td>
                <td className='px-6 py-3'>{leave.reason}</td>
                <td className='px-6 py-3'>{leave.status}</td>

            </tr>
            ))}
           </tbody> 
        </table>
    </div>
  )
}

export default LeaveList
