
import { useEffect, useState } from 'react';
import { fetchDepartments } from './utils/EmployeeHelper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EmployeeRegistrationForm = () => {
 const [departments, setDepartments] = useState([]);
 const [formData, setFormData] = useState({})  

  useEffect(()=> {
    const getDepartments = async () => {

    const departments =await fetchDepartments()
    setDepartments(departments)
  }
  getDepartments();
  }, []);
  
  const [employeeData, setEmployeeData] = useState({
    name: '',
    dob: '',
    address: '',
    phone: '',
    email: '',
    position: '',
    department: '',
    startDate: '',
    employmentType: '',
    workEmail: '',
    workPhoneNumber: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactPhone: '',
    emergencyContactAddress: '',
    bankName: '',
    accountName: '',
    accountNumber: '',
    basicSalary: ''
  });

  
  const navigate = useNavigate();
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const formDataObj = new FormData()
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key])
    })
    try {
      const response = await axios.post(
        "http://localhost:3000/employee/add",
        formDataObj,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/employee");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange">
        <h2 className="text-lg font-semibold mb-4 text-maryBlue">Employee Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Personal Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Personal Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  required
                  value={employeeData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  value={employeeData.dob}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">Current Address</label>
                <input
                  type="text"
                  id="currentAddress"
                  name="currentAddress"
                  required
                  value={employeeData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="primaryPhone" className="block text-sm font-medium text-gray-700">Primary Phone Number</label>
                <input
                  type="tel"
                  id="primaryPhone"
                  name="primaryPhone"
                  required
                  value={employeeData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  placeholder="123-456-7890"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={employeeData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
            </div>
          </fieldset>

          {/* Employment Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Employment Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  required
                  value={employeeData.position}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <select name="department" className='mt-1 p-2 block w-full border '
                  required>
                    <option value="">Select Department</option>
                    {departments.map(dep => (
                      <option key={dep._id} value={dep._id}> {dep.dep_name} </option>
                    ))}
                  </select>
                
              </div>
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  value={employeeData.startDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
                <select
                  id="employmentType"
                  name="employmentType"
                  required
                  value={employeeData.employmentType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                >
                  <option value="" disabled>Select Employment Type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Temporary">Temporary</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div>
                <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  required
                  value={employeeData.workEmail}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700">Work Phone Number</label>
                <input
                  type="tel"
                  id="workPhone"
                  name="workPhone"
                  required
                  value={employeeData.workPhone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
            </div>
          </fieldset>

          {/* Emergency Contact Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Emergency Contact Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="emergencyContactName"
                  name="emergencyContactName"
                  required
                  value={employeeData.emergencyContactName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="emergencyRelationship" className="block text-sm font-medium text-gray-700">Relationship</label>
                <input
                  type="text"
                  id="emergencyRelationship"
                  name="emergencyRelationship"
                  required
                  value={employeeData.emergencyRelationship}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  required
                  value={employeeData.emergencyPhone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="emergencyAddress" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="emergencyAddress"
                  name="emergencyAddress"
                  required
                  value={employeeData.emergencyAddress}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
            </div>
          </fieldset>

          {/* Bank Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Bank Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                  id="bankName"
                  name="bankName"
                  required
                  value={employeeData.bankName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">Account Name</label>
                <input
                  type="text"
                  id="accountName"
                  name="accountName"
                  required
                  value={employeeData.accountName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  required
                  value={employeeData.accountNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  required
                  value={employeeData.salary}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              
            </div>
            
          </fieldset>
         
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
            >
              Submit
            </button>
          </div>
        </form>
         
      </div>
    </div>
  );
};

export default EmployeeRegistrationForm;
// import React, { useState, useEffect } from 'react';
// import mockData from '../data/mockData.json'; // Import your mock data here

// const EmployeeRegistrationForm = () => {
//   const [employees, setEmployees] = useState([]); // Initialize with mock data
//   const [employee, setEmployee] = useState({
//     fullName: '',
//     dob: '',
//     currentAddress: '',
//     primaryPhone: '',
//     email: '',
//     position: '',
//     department: '',
//     startDate: '',
//     employmentType: '',
//     workEmail: '',
//     workPhone: '',
//     emergencyContactName: '',
//     emergencyRelationship: '',
//     emergencyPhone: '',
//     emergencyAddress: '',
//     bankName: '',
//     accountName: '',
//     accountNumber: '',
//     salary: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({
//       ...employee,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Employee data submitted:', employee);
//     // Add the new employee to the list
//     setEmployees([...employees, employee]);
//     // Clear the form
//     setEmployee({
//       fullName: '',
//       dob: '',
//       currentAddress: '',
//       primaryPhone: '',
//       email: '',
//       position: '',
//       department: '',
//       startDate: '',
//       employmentType: '',
//       workEmail: '',
//       workPhone: '',
//       emergencyContactName: '',
//       emergencyRelationship: '',
//       emergencyPhone: '',
//       emergencyAddress: '',
//       bankName: '',
//       accountName: '',
//       accountNumber: '',
//       salary: '',
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange">
//         <h2 className="text-lg font-semibold mb-4 text-maryBlue">Employee Registration</h2>
//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Your existing form fields here */}
//           {/* Personal Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Personal Information</legend>            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//                  <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   required
//                   value={employee.fullName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
//                 <input
//                   type="date"
//                   id="dob"
//                   name="dob"
//                   required
//                   value={employee.dob}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">Current Address</label>
//                 <input
//                   type="text"
//                   id="currentAddress"
//                   name="currentAddress"
//                   required
//                   value={employee.currentAddress}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="primaryPhone" className="block text-sm font-medium text-gray-700">Primary Phone Number</label>
//                 <input
//                   type="tel"
//                   id="primaryPhone"
//                   name="primaryPhone"
//                   required
//                   value={employee.primaryPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                   placeholder="123-456-7890"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={employee.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           {/* Employment Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Employment Information</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
//                 <input
//                   type="text"
//                   id="position"
//                   name="position"
//                   required
//                   value={employee.position}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
//                 <input
//                   type="text"
//                   id="department"
//                   name="department"
//                   required
//                   value={employee.department}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//                 <input
//                   type="date"
//                   id="startDate"
//                   name="startDate"
//                   required
//                   value={employee.startDate}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
//                 <select
//                   id="employmentType"
//                   name="employmentType"
//                   required
//                   value={employee.employmentType}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 >
//                   <option value="" disabled>Select Employment Type</option>
//                   <option value="Full-Time">Full-Time</option>
//                   <option value="Part-Time">Part-Time</option>
//                   <option value="Temporary">Temporary</option>
//                   <option value="Contract">Contract</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">Work Email</label>
//                 <input
//                   type="email"
//                   id="workEmail"
//                   name="workEmail"
//                   required
//                   value={employee.workEmail}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700">Work Phone Number</label>
//                 <input
//                   type="tel"
//                   id="workPhone"
//                   name="workPhone"
//                   required
//                   value={employee.workPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           {/* Emergency Contact Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Emergency Contact Information</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="emergencyContactName"
//                   name="emergencyContactName"
//                   required
//                   value={employee.emergencyContactName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emergencyRelationship" className="block text-sm font-medium text-gray-700">Relationship</label>
//                 <input
//                   type="text"
//                   id="emergencyRelationship"
//                   name="emergencyRelationship"
//                   required
//                   value={employee.emergencyRelationship}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="emergencyPhone"
//                   name="emergencyPhone"
//                   required
//                   value={employee.emergencyPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emergencyAddress" className="block text-sm font-medium text-gray-700">Address</label>
//                 <input
//                   type="text"
//                   id="emergencyAddress"
//                   name="emergencyAddress"
//                   required
//                   value={employee.emergencyAddress}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           {/* Bank Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Bank Information</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
//                 <input
//                   type="text"
//                   id="bankName"
//                   name="bankName"
//                   required
//                   value={employee.bankName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">Account Name</label>
//                 <input
//                   type="text"
//                   id="accountName"
//                   name="accountName"
//                   required
//                   value={employee.accountName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
//                 <input
//                   type="text"
//                   id="accountNumber"
//                   name="accountNumber"
//                   required
//                   value={employee.accountNumber}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
//                 <input
//                   type="number"
//                   id="salary"
//                   name="salary"
//                   required
//                   value={employee.salary}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           <div className="text-right">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Display the employee list */}
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold text-maryBlue">Employee List</h3>
//         <ul className="list-disc pl-5">
//           {employees.map((employee, index) => (
//             <li key={index}>{employee.fullName} - {employee.position}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default EmployeeRegistrationForm;

// EmployeeForm.js

// import React, { useState } from 'react';
// import { createEmployee } from '../services/apiService';

// const EmployeeForm = () => {
//   const [employeeData, setEmployeeData] = useState({
//     name: '',
//     position: '',
//     email: '',
//     // Add other necessary fields
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employeeData, [name]: value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createEmployee(employeeData);
//       // Set success message
//       setSuccessMessage('Employee registered successfully!');
//       setErrorMessage(''); // Clear any previous error
//       // Optionally reset the form fields
//       setEmployeeData({
//         name: '',
//         position: '',
//         email: '',
//         // Reset other necessary fields
//       });
//     } catch (error) {
//       console.error('Error registering employee:', error);
//       // Set error message
//       setErrorMessage('Failed to register employee. Please try again.');
//       setSuccessMessage(''); // Clear any previous success message
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Personal Information Section */}
//         <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Personal Information</legend>            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//                  <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   required
//                   value={employee.fullName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
//                 <input
//                   type="date"
//                   id="dob"
//                   name="dob"
//                   required
//                   value={employee.dob}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">Current Address</label>
//                 <input
//                   type="text"
//                   id="currentAddress"
//                   name="currentAddress"
//                   required
//                   value={employee.currentAddress}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="primaryPhone" className="block text-sm font-medium text-gray-700">Primary Phone Number</label>
//                 <input
//                   type="tel"
//                   id="primaryPhone"
//                   name="primaryPhone"
//                   required
//                   value={employee.primaryPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                   placeholder="123-456-7890"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   value={employee.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           {/* Employment Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Employment Information</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
//                 <input
//                   type="text"
//                   id="position"
//                   name="position"
//                   required
//                   value={employee.position}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
//                 <input
//                   type="text"
//                   id="department"
//                   name="department"
//                   required
//                   value={employee.department}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
//                 <input
//                   type="date"
//                   id="startDate"
//                   name="startDate"
//                   required
//                   value={employee.startDate}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
//                 <select
//                   id="employmentType"
//                   name="employmentType"
//                   required
//                   value={employee.employmentType}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 >
//                   <option value="" disabled>Select Employment Type</option>
//                   <option value="Full-Time">Full-Time</option>
//                   <option value="Part-Time">Part-Time</option>
//                   <option value="Temporary">Temporary</option>
//                   <option value="Contract">Contract</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">Work Email</label>
//                 <input
//                   type="email"
//                   id="workEmail"
//                   name="workEmail"
//                   required
//                   value={employee.workEmail}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="workPhone" className="block text-sm font-medium text-gray-700">Work Phone Number</label>
//                 <input
//                   type="tel"
//                   id="workPhone"
//                   name="workPhone"
//                   required
//                   value={employee.workPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           {/* Emergency Contact Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Emergency Contact Information</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   id="emergencyContactName"
//                   name="emergencyContactName"
//                   required
//                   value={employee.emergencyContactName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emergencyRelationship" className="block text-sm font-medium text-gray-700">Relationship</label>
//                 <input
//                   type="text"
//                   id="emergencyRelationship"
//                   name="emergencyRelationship"
//                   required
//                   value={employee.emergencyRelationship}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="emergencyPhone"
//                   name="emergencyPhone"
//                   required
//                   value={employee.emergencyPhone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="emergencyAddress" className="block text-sm font-medium text-gray-700">Address</label>
//                 <input
//                   type="text"
//                   id="emergencyAddress"
//                   name="emergencyAddress"
//                   required
//                   value={employee.emergencyAddress}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           {/* Bank Information Section */}
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">Bank Information</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
//                 <input
//                   type="text"
//                   id="bankName"
//                   name="bankName"
//                   required
//                   value={employee.bankName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">Account Name</label>
//                 <input
//                   type="text"
//                   id="accountName"
//                   name="accountName"
//                   required
//                   value={employee.accountName}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
//                 <input
//                   type="text"
//                   id="accountNumber"
//                   name="accountNumber"
//                   required
//                   value={employee.accountNumber}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
//                 <input
//                   type="number"
//                   id="salary"
//                   name="salary"
//                   required
//                   value={employee.salary}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//             </div>
//           </fieldset>

//           <div className="text-right">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
//             >
//               Submit
//             </button>
//           </div>
//       </form>

//       {/* Display success message */}
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

//       {/* Display error message */}
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default EmployeeForm;
// EmployeeForm.js

// import React, { useState } from 'react';
// import { createEmployee } from '../services/apiService';

// const EmployeeForm = () => {
//   const [employeeData, setEmployeeData] = useState({
//     fullName: '',
//     dateOfBirth: '',
//     currentAddress: '',
//     primaryPhoneNumber: '',
//     emailAddress: '',
//     position: '',
//     department: '',
//     startDate: '',
//     employmentType: '',
//     workEmail: '',
//     workPhoneNumber: '',
//     emergencyContactName: '',
//     emergencyContactRelationship: '',
//     emergencyContactPhone: '',
//     emergencyContactAddress: '',
//     bankName: '',
//     accountName: '',
//     accountNumber: '',
//     basicSalary: ''
//   });

//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employeeData, [name]: value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createEmployee(employeeData);
//       setSuccessMessage('Employee registered successfully!');
//       setErrorMessage('');
//       setEmployeeData({
//         fullName: '',
//         dateOfBirth: '',
//         currentAddress: '',
//         primaryPhoneNumber: '',
//         emailAddress: '',
//         position: '',
//         department: '',
//         startDate: '',
//         employmentType: '',
//         workEmail: '',
//         workPhoneNumber: '',
//         emergencyContactName: '',
//         emergencyContactRelationship: '',
//         emergencyContactPhone: '',
//         emergencyContactAddress: '',
//         bankName: '',
//         accountName: '',
//         accountNumber: '',
//         basicSalary: ''
//       });
//     } catch (error) {
//       setErrorMessage('Failed to register employee. Please try again.');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div>
//       <h2>Employee Registration</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Personal Information */}
//         <h3>Personal Information</h3>
//         <div>
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={employeeData.fullName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={employeeData.dateOfBirth}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Current Address:</label>
//           <input
//             type="text"
//             name="currentAddress"
//             value={employeeData.currentAddress}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Primary Phone Number:</label>
//           <input
//             type="tel"
//             name="primaryPhoneNumber"
//             value={employeeData.primaryPhoneNumber}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email Address:</label>
//           <input
//             type="email"
//             name="emailAddress"
//             value={employeeData.emailAddress}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         {/* Employment Information */}
//         <h3>Employment Information</h3>
//         <div>
//           <label>Position:</label>
//           <input
//             type="text"
//             name="position"
//             value={employeeData.position}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Department:</label>
//           <input
//             type="text"
//             name="department"
//             value={employeeData.department}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Start Date:</label>
//           <input
//             type="date"
//             name="startDate"
//             value={employeeData.startDate}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Type of Employment:</label>
//           <select
//             name="employmentType"
//             value={employeeData.employmentType}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">Select Employment Type</option>
//             <option value="Full-Time">Full-Time</option>
//             <option value="Part-Time">Part-Time</option>
//             <option value="Temporary">Temporary</option>
//             <option value="Contract">Contract</option>
//           </select>
//         </div>
//         <div>
//           <label>Work Email:</label>
//           <input
//             type="email"
//             name="workEmail"
//             value={employeeData.workEmail}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Work Phone Number:</label>
//           <input
//             type="tel"
//             name="workPhoneNumber"
//             value={employeeData.workPhoneNumber}
//             onChange={handleInputChange}
//           />
//         </div>

//         {/* Emergency Contact Information */}
//         <h3>Emergency Contact Information</h3>
//         <div>
//           <label>Emergency Contact Name:</label>
//           <input
//             type="text"
//             name="emergencyContactName"
//             value={employeeData.emergencyContactName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Relationship:</label>
//           <input
//             type="text"
//             name="emergencyContactRelationship"
//             value={employeeData.emergencyContactRelationship}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             name="emergencyContactPhone"
//             value={employeeData.emergencyContactPhone}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             type="text"
//             name="emergencyContactAddress"
//             value={employeeData.emergencyContactAddress}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         {/* Banking Information */}
//         <h3>Banking Information</h3>
//         <div>
//           <label>Bank Name:</label>
//           <input
//             type="text"
//             name="bankName"
//             value={employeeData.bankName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Account Name:</label>
//           <input
//             type="text"
//             name="accountName"
//             value={employeeData.accountName}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Account Number:</label>
//           <input
//             type="text"
//             name="accountNumber"
//             value={employeeData.accountNumber}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Basic Salary:</label>
//           <input
//             type="number"
//             name="basicSalary"
//             value={employeeData.basicSalary}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit">Register Employee</button>
//       </form>

//       {/* Success and Error Messages */}
//       {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//     </div>
//   );
// };

// export default EmployeeForm;
