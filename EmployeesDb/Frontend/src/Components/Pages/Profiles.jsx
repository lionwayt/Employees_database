// import React from 'react';

// const Profile = () => {
//   const hrProfile = {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phone: '123-456-7890',
//     jobTitle: 'HR Manager',
//     department: 'Human Resources',
//     hireDate: '2020-01-15',
//     address: '123 Main St, City, Country',
//     status: 'Active',
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">HR Profile</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <h3 className="text-lg font-semibold">Personal Information</h3>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Full Name:</p>
//               <p className="text-gray-700">{hrProfile.firstName} {hrProfile.lastName}</p>
//             </div>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Email:</p>
//               <p className="text-gray-700">{hrProfile.email}</p>
//             </div>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Phone:</p>
//               <p className="text-gray-700">{hrProfile.phone}</p>
//             </div>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Address:</p>
//               <p className="text-gray-700">{hrProfile.address}</p>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">Job Information</h3>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Job Title:</p>
//               <p className="text-gray-700">{hrProfile.jobTitle}</p>
//             </div>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Department:</p>
//               <p className="text-gray-700">{hrProfile.department}</p>
//             </div>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Hire Date:</p>
//               <p className="text-gray-700">{hrProfile.hireDate}</p>
//             </div>
//             <div className="mt-2">
//               <p className="text-sm font-medium">Status:</p>
//               <p className="text-gray-700">{hrProfile.status}</p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6">
//           <h3 className="text-lg font-semibold">Actions</h3>
//           <div className="mt-2 flex space-x-4">
//             <button className="bg-maryBlue text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               Edit Profile
//             </button>
//             <button className="bg-maryOrange text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
//               Delete Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from 'react';

const Profile = () => {
  const hrProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    jobTitle: 'HR Manager',
    department: 'Human Resources',
    hireDate: '2020-01-15',
    address: '123 Main St, City, Country',
    status: 'Active',
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-maryBlue">HR Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="mt-2">
              <p className="text-sm font-medium">Full Name:</p>
              <p className="text-gray-700">{hrProfile.firstName} {hrProfile.lastName}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Email:</p>
              <p className="text-gray-700">{hrProfile.email}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Phone:</p>
              <p className="text-gray-700">{hrProfile.phone}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Address:</p>
              <p className="text-gray-700">{hrProfile.address}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Job Information</h3>
            <div className="mt-2">
              <p className="text-sm font-medium">Job Title:</p>
              <p className="text-gray-700">{hrProfile.jobTitle}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Department:</p>
              <p className="text-gray-700">{hrProfile.department}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Hire Date:</p>
              <p className="text-gray-700">{hrProfile.hireDate}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">Status:</p>
              <p className="text-gray-700">{hrProfile.status}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Actions</h3>
          <div className="mt-2 flex space-x-4">
            <button className="bg-maryBlue text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Edit Profile
            </button>
            <button className="bg-maryOrange text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
