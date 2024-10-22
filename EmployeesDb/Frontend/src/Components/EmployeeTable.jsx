// import React,{useState,useEffect }from 'react'
// import { getEmployees, createEmployee } from '../services/apiService';

// export default function EmployeeTable() {
  
//   const [loading, setLoading] = useState(true);
//   const [employees, setEmployees] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const data = await getEmployees();
//         setEmployees(data);
//       } catch (error) {
//         setError('Failed to load employees.');
//         console.error(error);
//       }finally {
//         setLoading(false);
//       }
//     };

//     fetchEmployees();
//   }, []);
//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }
    
    
//   return (
    
  
//       <div className="container mx-auto p-4">
//       {/* Employee List Table */}
//       <div className="bg-white shadow-md rounded-lg p-4">
//         <h2 className="text-lg font-semibold mb-2">Employee List</h2>
//         {error && <p>{error}</p>}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200 table-auto">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">ID</th>
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">Name</th>
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">Job Title</th>
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">Department</th>
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">Hire Date</th>
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">Status</th>
//                 <th className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">Contact</th>
//               </tr>
//             </thead>
//             <tbody>
//               {employees.map((employee) => (
//                 <tr key={employee.id}>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.id}</td>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.name}</td>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.jobTitle}</td>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.department}</td>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.hireDate}</td>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.status}</td>
//                   <td className="px-2 py-2 border-b text-xs sm:text-sm md:text-base">{employee.contact}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import { getEmployees } from '../Components/Services/apiService.js';

export default function EmployeeTable() {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        setError('Failed to load employees.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Employee List Table */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4 text-maryBlue">Employee List</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 table-auto">
            <thead>
              <tr className="bg-maryOrange text-white">
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">ID</th>
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">Name</th>
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">Job Title</th>
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">Department</th>
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">Hire Date</th>
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">Status</th>
                <th className="px-2 py-2 border-b border-maryBlue text-xs sm:text-sm md:text-base">Contact</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-maryBlue hover:text-white transition duration-200">
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.id}</td>
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.fullName}</td>
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.position}</td>
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.department}</td>
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.startDate}</td>
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.status}</td>
                  <td className="px-2 py-2 border-b border-gray-300 text-xs sm:text-sm md:text-base">{employee.workPhoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

