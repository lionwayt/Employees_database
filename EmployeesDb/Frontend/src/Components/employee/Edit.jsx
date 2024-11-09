import  { useEffect, useState } from 'react'
import axios from 'axios';
import { fetchDepartments} from '../utils/EmployeeHelper.jsx';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [departments, setDepartments] = useState(null);
    const [employee, setEmployee] = useState({
      name: ''
    });
    const navigate = useNavigate();
    const {id} = useParams()

  

    

    useEffect(() => {
        const fetchEmployee = async () => {
       
      try {
        const responnse = await axios.get(
         `https://mjemployeemanagment.onrender.com/api/employee/${id}`,
         
          {
            headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (responnse.data.success) {
          const employee = responnse.data.employee;
          setEmployee((prev) => ({ 
            ...prev,
             name: employee.userId.name}));
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchEmployee();
    }, []);

    useEffect(() => {
      const getDepartments = async () => {
          const departments = await fetchDepartments();
          setDepartments(departments);

      };

      getDepartments();
   
  }, []);

    const handleInputChange = (e) => {
      const { name, value} = e.target;
    {
      setEmployee((prevData) => ({ ...prevData, [name]: value }));
      }
  };
  

  const handleSubmit = async (e) => {
      e.preventDefault();

     

       
      try {
        const response = await axios.put(
        `https://mjemployeemanagment.onrender.com/api/employee/${id}`,
        employee,
          
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
    <>{departments && employee ? (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange">
        <h2 className="text-lg font-semibold mb-4 text-maryBlue">Edit Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Personal Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Personal Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor='name'  className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value= {employee.name}
                  required
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
            
            
            </div>
          </fieldset>

          {/* Employment Information Section */}
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">Employment Information</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor='position' className="block text-sm font-medium text-gray-700">Position</label>
                <input
                  type="text"
                  
                  name="position"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div className='col-span-2'>
                <label htmlFor='department' className="block text-sm font-medium text-gray-700">Department</label>
                <select name="department" className='mt-1 p-2 block w-full border '
                  required>
                    <option value="">Select Department</option>
                    {departments.map(dep => (
                      <option key={dep._id} value={dep._id}> {dep.dep_name} </option>
                    ))}
                  </select>
                
              </div>
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
                <label htmlFor='emergencyContactName' className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
               
                  name="emergencyContactName"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='emergencyRelationship' className="block text-sm font-medium text-gray-700">Relationship</label>
                <input
                  type="text"
             
                  name="emergencyRelationship"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='emergencyPhone'  className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
              
                  name="emergencyPhone"
                  required
                  
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='emergencyAddress' className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
        
                  name="emergencyAddress"
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
                <label htmlFor='bankName' className="block text-sm font-medium text-gray-700">Bank Name</label>
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

              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                    password
                </label>
                <input type="password" 
                name='password'
                placeholder='******'
                onChange={handleInputChange}
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                required/>
              </div>

              <div>
                <label htmlFor='role' className='block text-sm font-medium text-gray-700'>
                    Role
                </label>
                <select
                name='role'
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                onChange={handleInputChange}
                required>
                    <option>Select Role</option>
                    <option value="hr">Hr</option>
                    <option value="employee">Employee</option>
                    <option value="projectCo">Project Coordinator</option>
                    <option value="executiveDi">Executive Director</option>
                    </select>
              </div>
            </div>
          </fieldset>
         
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
            >
              Edit Employee
            </button>
          </div>
        </form>
         
      </div>
    </div>
    ): <div>Loading...</div> }</>
  );

}

export default Edit;
