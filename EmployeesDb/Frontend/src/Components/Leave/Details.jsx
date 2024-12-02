import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const {id} = useParams()
  const [leave, setLeave] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchLeave = async () => {
      try {
        const responnse = await axios.get(
          `http://localhost:3000/api/leave/detail/${id}`, 
           
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (responnse.data.success) {
          setLeave(responnse.data.leave);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchLeave();
  }, []);

  const changeStatus = async (id, status) => {
    try {
      const responnse = await axios.put(
        `http://localhost:3000/api/leave/${id}`, {status},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (responnse.data.success) {
        navigate('/hr_dashboard/leaves')
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  }

  return (
    <>
      {leave ? (
        <div className="max-w-3x1 mx-auto mt-10 bg-white p-8 rounded-md shadow-md"> 
          <h2 className="text-2xl font-bold mb-4 text-maryBlue text-center">
            Leave Details
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <img
                src={`http://localhost:3000/${leave.employeeId.userId.profileImage}`}
                alt=""
                className="rounded-full border w-72"
              />
            </div>

            <div>
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{leave.employeeId.userId.name}</p>
              </div>
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{leave.employeeId.employeeId}</p>
              </div>
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">LeaveType:</p>
                <p className="font-medium">{leave.leaveType}</p>
              </div>
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">Reason:</p>
                <p className="font-medium">{leave.reason}</p>
              </div>
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">Department:</p>
                <p className="font-medium">{leave.employeeId.department.dep_name}</p>
              </div>
             
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">Phone:</p>
                <p className="font-medium">{leave.employeeId.phone}</p>
              </div>
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">Start Date:</p>
                <p className="font-medium">{new Date(leave.startDate).toLocaleDateString()}</p>
              </div>
             
              <div className="flex space-x-3 mb-2">
                <p className="text-lg font-bold">End Date:</p>
                <p className="font-medium">{new Date(leave.endDate).toLocaleDateString()}</p>
              </div>
             <div className="flex space-x-3 mb-2">
              
              <p className="text-lg font-bold"> {leave.status === "pending" ? "Action:" : "Status:"}</p>
              
              <div className="flex space-x-2">
                <button className="px-2 py-0.5 bg-green-300 hover:bg-green-400"
                onClick={() => changeStatus(leave._id, "Approved" )}>Approve</button>
                <button className="px-2 py-0.5 bg-red-300 hover:bg-red-400"
                onClick={() => changeStatus(leave._id, "Rejected" )}>Reject</button>
              </div>
            
             </div>
          </div>  
        </div>
      </div>
    </div>
      ) : (
        <div> Loading ...</div>
      )}

    </>
  );
};

export default Details;
