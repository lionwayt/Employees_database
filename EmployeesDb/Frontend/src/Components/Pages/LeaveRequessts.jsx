// import React, { useState } from 'react';

// export default function LeaveRequestsPage() {
//   const [leaveRequests, setLeaveRequests] = useState([
//     { id: 1, employeeName: 'John Doe', department: 'IT', startDate: '2024-10-01', endDate: '2024-10-05', status: 'Pending' },
//     { id: 2, employeeName: 'Jane Smith', department: 'Finance', startDate: '2024-10-03', endDate: '2024-10-08', status: 'Approved' },
//     { id: 3, employeeName: 'Bob Johnson', department: 'HR', startDate: '2024-10-10', endDate: '2024-10-15', status: 'Rejected' },
//   ]);

//   const [newRequest, setNewRequest] = useState({
//     employeeName: '',
//     department: '',
//     startDate: '',
//     endDate: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewRequest((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!newRequest.employeeName || !newRequest.department || !newRequest.startDate || !newRequest.endDate) {
//       alert('Please fill in all fields');
//       return;
//     }

//     const newId = leaveRequests.length ? leaveRequests[leaveRequests.length - 1].id + 1 : 1;
//     setLeaveRequests([
//       ...leaveRequests,
//       {
//         id: newId,
//         employeeName: newRequest.employeeName,
//         department: newRequest.department,
//         startDate: newRequest.startDate,
//         endDate: newRequest.endDate,
//         status: 'Pending',
//       },
//     ]);

//     // Reset the form
//     setNewRequest({ employeeName: '', department: '', startDate: '', endDate: '' });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Title */}
//       <h1 className="text-3xl font-bold text-center mb-6 text-maryBlue">Leave Requests</h1>

//       {/* Leave Requests Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
//           <thead className="bg-maryOrange text-white">
//             <tr>
//               {['ID', 'Employee Name', 'Department', 'Start Date', 'End Date', 'Status', 'Actions'].map((header) => (
//                 <th key={header} className="py-3 px-4 text-left border-b border-maryBlue text-sm md:text-base">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {leaveRequests.map((request) => (
//               <tr key={request.id} className="border-t hover:bg-gray-100 text-sm md:text-base">
//                 <td className="py-3 px-4">{request.id}</td>
//                 <td className="py-3 px-4">{request.employeeName}</td>
//                 <td className="py-3 px-4">{request.department}</td>
//                 <td className="py-3 px-4">{request.startDate}</td>
//                 <td className="py-3 px-4">{request.endDate}</td>
//                 <td className={`py-3 px-4 ${request.status === 'Approved' ? 'text-green-600' : request.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
//                   {request.status}
//                 </td>
//                 <td className="py-3 px-4">
//                   <div className="space-x-2">
//                     <button className="bg-maryblue text-white px-3 py-1 rounded-md hover:bg-opacity-90">Approve</button>
//                     <button className="bg-maryorange text-white px-3 py-1 rounded-md hover:bg-opacity-90">Reject</button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Submit New Leave Request Form */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4 text-maryblue">Submit Leave Request</h2>
//         <form className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryorange" onSubmit={handleSubmit}>
//           <fieldset className="border border-maryblue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryorange">Leave Request Details</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Employee Name</label>
//                 <input
//                   type="text"
//                   name="employeeName"
//                   value={newRequest.employeeName}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange"
//                   placeholder="Enter employee name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Department</label>
//                 <input
//                   type="text"
//                   name="department"
//                   value={newRequest.department}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange"
//                   placeholder="Enter department"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Start Date</label>
//                 <input
//                   type="date"
//                   name="startDate"
//                   value={newRequest.startDate}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">End Date</label>
//                 <input
//                   type="date"
//                   name="endDate"
//                   value={newRequest.endDate}
//                   onChange={handleInputChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange"
//                   required
//                 />
//               </div>
//             </div>
//           </fieldset>

//           <div className="text-right mt-4">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-opacity-90 focus:outline-none focus:bg-maryorange transition ease-in-out duration-150"
//             >
//               Submit Request
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';

export default function LeaveRequestsPage() {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, employeeName: 'John Doe', department: 'IT', startDate: '2024-10-01', endDate: '2024-10-05', status: 'Pending' },
    { id: 2, employeeName: 'Jane Smith', department: 'Finance', startDate: '2024-10-03', endDate: '2024-10-08', status: 'Approved' },
    { id: 3, employeeName: 'Bob Johnson', department: 'HR', startDate: '2024-10-10', endDate: '2024-10-15', status: 'Rejected' },
  ]);

  const [newRequest, setNewRequest] = useState({
    employeeName: '',
    department: '',
    startDate: '',
    endDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newRequest.employeeName || !newRequest.department || !newRequest.startDate || !newRequest.endDate) {
      alert('Please fill in all fields');
      return;
    }

    const newId = leaveRequests.length ? leaveRequests[leaveRequests.length - 1].id + 1 : 1;
    setLeaveRequests([
      ...leaveRequests,
      {
        id: newId,
        employeeName: newRequest.employeeName,
        department: newRequest.department,
        startDate: newRequest.startDate,
        endDate: newRequest.endDate,
        status: 'Pending',
      },
    ]);

    // Reset the form
    setNewRequest({ employeeName: '', department: '', startDate: '', endDate: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-maryBlue">Leave Requests</h1>

      {/* Leave Requests Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-maryOrange text-white">
            <tr>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">ID</th>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">Employee Name</th>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">Department</th>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">Start Date</th>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">End Date</th>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">Status</th>
              <th className="py-3 px-2 md:px-4 text-left border-b border-maryBlue text-sm md:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id} className="border-t hover:bg-gray-100">
                <td className="py-3 px-2 md:px-4 text-sm md:text-base">{request.id}</td>
                <td className="py-3 px-2 md:px-4 text-sm md:text-base">{request.employeeName}</td>
                <td className="py-3 px-2 md:px-4 text-sm md:text-base">{request.department}</td>
                <td className="py-3 px-2 md:px-4 text-sm md:text-base">{request.startDate}</td>
                <td className="py-3 px-2 md:px-4 text-sm md:text-base">{request.endDate}</td>
                <td className={`py-3 px-2 md:px-4 text-sm md:text-base ${request.status === 'Approved' ? 'text-green-600' : request.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {request.status}
                </td>
                <td className="py-3 px-2 md:px-4 text-sm md:text-base">
                  <div className="space-x-2">
                    <button className="bg-maryblue text-white px-2 md:px-3 py-1 rounded-md hover:bg-opacity-90">Approve</button>
                    <button className="bg-maryorange text-white px-2 md:px-3 py-1 rounded-md hover:bg-opacity-90">Reject</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Submit New Leave Request Form */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-maryblue">Submit Leave Request</h2>
        <form className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryorange" onSubmit={handleSubmit}>
          <fieldset className="border border-maryblue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryorange">Leave Request Details</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Employee Name</label>
                <input
                  type="text"
                  name="employeeName"
                  value={newRequest.employeeName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange focus:ring focus:ring-maryorange focus:ring-opacity-50"
                  placeholder="Enter employee name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <input
                  type="text"
                  name="department"
                  value={newRequest.department}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange focus:ring focus:ring-maryorange focus:ring-opacity-50"
                  placeholder="Enter department"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={newRequest.startDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange focus:ring focus:ring-maryorange focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={newRequest.endDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryorange focus:ring focus:ring-maryorange focus:ring-opacity-50"
                  required
                />
              </div>
            </div>
          </fieldset>

          <div className="text-right mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-maryblue text-white font-medium text-sm rounded-md hover:bg-opacity-90 focus:outline-none focus:bg-maryorange transition ease-in-out duration-150"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
