
import React,  { useEffect, useState } from "react";
import { columns, LeaveBtn } from "../utils/LeaveHelper.jsx";
import axios from "axios";
import DataTable from "react-data-table-component";


const Table = () => {
  const [leaves, setLeaves] = useState([]);
  const [filteredLeaves, setFilteredLeaves] = useState([]);

  const fetchLeaves = async () => {
    try {
      const responnse = await axios.get(
        "http://localhost:3000/api/leave",  
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,                 
          },
        });
      console.log(responnse.data)
      if (responnse.data.success) {
        let no = 1;
        const data = await responnse.data.leaves.map((leave) => ({
          
          _id: leave._id,
          no: no++,
          employeeId: leave.employeeId.employeeId,
          name: leave.employeeId.userId.name,
          department: leave.employeeId.department.name,
          leaveType: leave.leaveType,
          days:
          new Date(leave.endDate).getDate() -
          new Date(leave.startDate).getDate(),
          status: leave.status,
          action: ( <LeaveBtn Id={leave._id} /> ),
        }));
        setLeaves(data);
        setFilteredLeaves(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    }
  };
  useEffect(() => {
    fetchLeaves()
  }, []);

  const filterByInput = (e) => {
    const data = leaves.filter((leave) => 
    leave.employeeId
    .toLowerCase()
    .includes(e.target.value.toLowerCase())
  );
  setFilteredLeaves(data);
  };

  const filterByButton = (status) => {
    const data = leaves.filter((leave) => 
    leave.status
    .toLowerCase()
    .includes(status.toLowerCase())
  );
  setFilteredLeaves(data)
  };

  return (
    <>
   {filteredLeaves ? (
 <div className='p-6'>
        <div className='text-center'>
            <h3 className='text-2-1 font-bold'>Manage Leaves</h3>
        </div>
        <div className='flex justify-between items-center'>
            <input 
              type="text" 
              placeholder='Search By Emp ID '
              className='px-4 py-0.5 border'
              onChange={filterByInput}
              />
              <div className='space-x-3'>
              <button className='px-2 py-1 bg-maryBlue text-white hover:bg-white hover:text-maryBlue'
               onClick={() => filterByButton("Pending")}>Pending</button>
             <button className='px-2 py-1 bg-maryBlue text-white hover:bg-white hover:text-maryBlue'
              onClick={() => filterByButton("Approved")} >Approved</button>
             <button className='px-2 py-1 bg-maryBlue text-white hover:bg-white hover:text-maryBlue'
              onClick={() => filterByButton("Rejected")}>Rejected</button>
              </div>
        </div>
        <div className="mt-3">
        <DataTable
         columns={columns}
         data={filteredLeaves}
         pagination
         />
        </div>
    </div>
  ) : (<div>Loading ...</div> 

  )}
  </>
  );
};

export default Table;
