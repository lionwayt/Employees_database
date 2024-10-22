// import React from 'react';

// // Sample attendance data
// const attendanceData = [
//   { id: 1, name: 'John Doe', date: '2024-10-01', status: 'Present' },
//   { id: 2, name: 'Jane Smith', date: '2024-10-01', status: 'Absent' },
//   { id: 3, name: 'Sam Johnson', date: '2024-10-01', status: 'Late' },
//   { id: 4, name: 'Lisa Brown', date: '2024-10-01', status: 'Present' },
//   { id: 5, name: 'Mike Wilson', date: '2024-10-01', status: 'Present' },
// ];

// const getStatusColor = (status) => {
//   switch (status) {
//     case 'Present':
//       return 'bg-green-200 text-green-800';
//     case 'Absent':
//       return 'bg-red-200 text-red-800';
//     case 'Late':
//       return 'bg-yellow-200 text-yellow-800';
//     default:
//       return '';
//   }
// };

// const AttendancePage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Employee Attendance</h2>
      
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <table className="min-w-full border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="px-4 py-2 border-b">ID</th>
//               <th className="px-4 py-2 border-b">Name</th>
//               <th className="px-4 py-2 border-b">Date</th>
//               <th className="px-4 py-2 border-b">Status</th>
//               <th className="px-4 py-2 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {attendanceData.map((record) => (
//               <tr key={record.id}>
//                 <td className="px-4 py-2 border-b">{record.id}</td>
//                 <td className="px-4 py-2 border-b">{record.name}</td>
//                 <td className="px-4 py-2 border-b">{record.date}</td>
//                 <td className="px-4 py-2 border-b">
//                   <span className={`inline-block px-2 py-1 rounded-full ${getStatusColor(record.status)}`}>
//                     {record.status}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2 border-b">
//                   <button className="text-blue-500 hover:underline">Edit</button>
//                   <span className="mx-2">|</span>
//                   <button className="text-red-500 hover:underline">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       <div className="mt-6">
//         <button className="bg-maryBlue text-white px-4 py-2 rounded-md">
//           Add Attendance Record
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AttendancePage;
import React from 'react';

// Sample attendance data
const attendanceData = [
  { id: 1, name: 'John Doe', date: '2024-10-01', status: 'Present' },
  { id: 2, name: 'Jane Smith', date: '2024-10-01', status: 'Absent' },
  { id: 3, name: 'Sam Johnson', date: '2024-10-01', status: 'Late' },
  { id: 4, name: 'Lisa Brown', date: '2024-10-01', status: 'Present' },
  { id: 5, name: 'Mike Wilson', date: '2024-10-01', status: 'Present' },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Present':
      return 'bg-green-200 text-green-800';
    case 'Absent':
      return 'bg-red-200 text-red-800';
    case 'Late':
      return 'bg-yellow-200 text-yellow-800';
    default:
      return '';
  }
};

const AttendancePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-maryBlue">Employee Attendance</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-maryOrange text-white">
              <th className="px-4 py-2 border-b border-maryBlue">ID</th>
              <th className="px-4 py-2 border-b border-maryBlue">Name</th>
              <th className="px-4 py-2 border-b border-maryBlue">Date</th>
              <th className="px-4 py-2 border-b border-maryBlue">Status</th>
              <th className="px-4 py-2 border-b border-maryBlue">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record) => (
              <tr key={record.id} className="hover:bg-gray-100 transition duration-200">
                <td className="px-4 py-2 border-b border-gray-300">{record.id}</td>
                <td className="px-4 py-2 border-b border-gray-300">{record.name}</td>
                <td className="px-4 py-2 border-b border-gray-300">{record.date}</td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <span className={`inline-block px-2 py-1 rounded-full ${getStatusColor(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <span className="mx-2">|</span>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6">
        <button className="bg-maryBlue text-white px-4 py-2 rounded-md">
          Add Attendance Record
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;
