import  { useEffect, useState } from 'react'
import { fetchDepartments, fetchBranches } from '../utils/EmployeeHelper.jsx'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Add = () => {
    const [departments, setDepartments] = useState([]);
    const [branches, setBranches] = useState([]);
    const [formData, setFormData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
            const getDepartments = async () => {
            const departments = await fetchDepartments();
            setDepartments(departments);

        };
        getDepartments();
     
    }, []);

    useEffect(() => {
      const getBranches = async () => {
      const branches = await fetchBranches();
      setBranches(branches);

  };
  getBranches();

}, []);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image"){
            setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData()
        Object.keys(formData).forEach((key) => {
            formDataObj.append(key, formData[key])
        })
  
      try {
        const response = await axios.post(
          "http://localhost:3000/api/employee/add",
           formDataObj,
          {
            headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          navigate("/hr_dashboard/employees");
        }

      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };


  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange">
        <h2 className="text-lg font-semibold mb-4 text-maryBlue">Employee Registration</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/*  Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
                <label  className='block text-sm font-medium text-gray-700'>
                    Upload Image
                </label>
                <input type="file" 
                name='image'
                placeholder='Upload Image'
                onChange={handleInputChange} 
                accept='image/*'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange'
                required/>
              </div>
          <div>
                <label htmlFor='role' className='block text-sm font-medium text-gray-700'>
                    Role
                </label>
                <select
                name='role'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange'
                onChange={handleInputChange}
                required>
                    <option>Select Role</option>
                    <option value="hr">Hr</option>
                    <option value="employee">Employee</option>
                    <option value="projectCo">Project Coordinator</option>
                    <option value="executiveDir">Executive Director</option>
                    </select>
              </div>
          <div>
                <label htmlFor='department' className="block text-sm font-medium text-gray-700">Department</label>
                <select name="department"  className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange '
                  onChange={handleInputChange }>
                    
                    <option value="">Select Department</option>
                   {departments.map(dep => (
                    <option key={dep._id} value={dep._id}>{dep.dep_name}</option>
                   ))}
                    
                  </select>
                
              </div>
              <div>
                <label htmlFor='branch' className="block text-sm font-medium text-gray-700">Branch</label>
                <select name="branch"  className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange '
                  onChange={handleInputChange }>
                    
                    <option value="">Select Branch</option>
                   {branches.map(bra => (
                    <option key={bra._id} value={bra._id}>{bra.branch_name}</option>
                   ))}
                    
                  </select>
                
              </div>
        <div>
                <label htmlFor='employeeId' className='block text-sm font-medium text-gray-700'>
                    Employee ID
                </label>
                <input type="text" 
                name='employeeId'
                onChange={handleInputChange}
                placeholder='Employee ID'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange'
                required/>
              </div>
              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    password
                </label>
                <input type="password" 
                name='password'
                placeholder='******'
                onChange={handleInputChange}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange'
                required/>
              </div>
              </div>
              </fieldset>
          
          {/* Personal Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Personal Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                 placeholder="Insert name"
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='dob' className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  required
                  
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label  htmlFor='address' className="block text-sm font-medium text-gray-700">Current Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='phone'  className="block text-sm font-medium text-gray-700">Primary Phone Number</label>
                <input
                  type="tel"

                  name="phone"
                  required
                
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  placeholder="123-456-7890"
                />
              </div>
              <div>
                <label htmlFor='email' className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                
                  name="email"
                  required
                
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='training' className="block text-sm font-medium text-gray-700">Training</label>
                <input
                  type="text"
                
                  name="training"
                  required
                
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
                <label htmlFor='startDate'  className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  
                  name="startDate"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='employmentType' className="block text-sm font-medium text-gray-700">Employment Type</label>
                <select
               
                  name="employmentType"
                  required
                 
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
                <label htmlFor='workEmail' className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  
                  name="workEmail"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='workPhone' className="block text-sm font-medium text-gray-700">Work Phone Number</label>
                <input
                  type="tel"
                 
                  name="workPhone"
                  required
                 
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
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="emergencyContactName"
                  required
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label  className="block text-sm font-medium text-gray-700">Relationship</label>
                <input
                  type="text"
             
                  name="emergencyContactRelationship"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="emergencyContactPhone"
                  required
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="emergencyContactAddress"
                  required
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
                <label  className="block text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                
                  name="bankName"
                  required
                  
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='accountName' className="block text-sm font-medium text-gray-700">Account Name</label>
                <input
                  type="text"      
                  name="accountName"
                  required      
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='accountNumber' className="block text-sm font-medium text-gray-700">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  required
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='salary'  className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="number"
                  name="salary"
                  required
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
              Add Employee
            </button>
          </div>
        </form>
         
      </div>
    </div>
  )
}

export default Add;
