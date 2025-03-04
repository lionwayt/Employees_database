import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../Context/authContext.jsx";

const LeaveList = () => {

  const [leaves, setLeaves] = useState(null);
  let no = 1;
  const { id } = useParams();
  const { user } = useAuth();

  const fetchLeaves = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/leave/${id}`, 
        {

          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        
      console.log(response.data)
      if (response.data.success) {
        setLeaves(response.data.leaves);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  if (!leaves) {
    return <div>Loading</div>;
  }
  return (
    <div className="p-6">
      <div className="text-center">
        <h3 className="text-2-1 font-bold">Manage Leaves</h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="search"
          className="px-4 py-0.5 border"
        />
        {user.role === "employee" && (
          <Link
            to="/employee_dashboard/add-leave"
            className="px-4 py-1 bg-maryBlue  text-white rounded"
          >
            Add New Leave
          </Link>
        )}
      </div>

      <table className="w-full text-sm text-left text-gray-500 mt-6">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border border-gray-200">
          <tr>
            <th className="px-6 py-3">NO</th>
            <th className="px-6 py-3">Leave Type</th>
            <th className="px-6 py-3">From</th>
            <th className="px-6 py-3">To</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr
              key={leave._id}
              className="bg-white border-b dark:bg-gray-50 dark:border-gray-700"
            >
              <td className="px-6 py-3">{no++}</td>
              <td className="px-6 py-3">{leave.leaveType}</td>
              <td className="px-6 py-3">{new Date(leave.startDate).toLocaleDateString()} </td>
              <td className="px-6 py-3">{new Date(leave.endDate).toLocaleDateString()} </td>
              <td className="px-6 py-3">{leave.reason}</td>
              <td className="px-6 py-3">{leave.status}</td>
            </tr>
          )) 
          }
        </tbody>
      </table>
    </div>
  );
};

export default LeaveList;
