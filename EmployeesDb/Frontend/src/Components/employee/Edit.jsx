import  { useEffect, useState } from 'react'
import axios from 'axios';
import { fetchDepartments, fetchBranches} from '../utils/EmployeeHelper.jsx';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    
    const [employee, setEmployee] = useState({
      name: '',
      dob: '',
        email: '',
        address: '',
        phone: '',
        branch: '',
        department: '',
        startDate: '',
        employmentType: '',
        workEmail: '',
        workPhone: '',
        emergencyContactName: '',
        emergencyContactRelationship: '',
        emergencyContactPhone: '',
        emergencyContactAddress: '',
        bankName: '',
        accountName: '',
        accountNumber: '',
        salary: ''
    });
    const [departments, setDepartments] = useState(null);
    const [branches, setBranches] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams()

  

    

    useEffect(() => {
     
        const fetchEmployee = async () => {
       
      try {
        const responnse = await axios.get(
         `http://localhost:3000/api/employee/${id}`,
         
          {
            headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (responnse.data.success) {
          const employee = responnse.data.employee
          setEmployee((prev) => ({ 
            ...prev,
             name: employee.userId.name,
             dob: employee.dob,
             email: employee.email,
 
             address: employee.address,
             phone: employee.phone,
             branch: employee.branch,
             department: employee.department,
             startDate: employee.startDate,
             employmentType: employee.employmentType,
             workEmail: employee.workEmail,
             workPhone: employee.workPhone,
             emergencyContactName: employee.emergencyContactName,
             emergencyContactRelationship: employee.emergencyContactRelationship,
             emergencyContactPhone: employee.emergencyContactPhone,
             emergencyContactAddress: employee.emergencyContactAddress,
             bankName: employee.bankName,
             accountName: employee.accountName,
             accountNumber: employee.accountNumber,
             salary: employee.salary}));
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

  useEffect(() => {
    const getBranches = async () => {
        const branches = await fetchBranches();
        setBranches(branches);

    };

    getBranches();
 
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
        `http://localhost:3000/${id}`,
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
    <>{departments && employee && branches ? (
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
                  value= {employee.dob}
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
                  value= {employee.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='phone'  className="block text-sm font-medium text-gray-700">Primary Phone Number</label>
                <input
                  type="tel"
                  value= {employee.phone}
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
                <label htmlFor='startDate'  className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  value= {employee.startDate}
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
                  value= {employee.employmentType}
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
                  value= {employee.workEmail}
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
                  value= {employee.workPhone}
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
                  value= {employee.emergencyContactName}
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
                  value= {employee.emergencyContactRelationship}
                  name="emergencyContactRelationship"
                  required
                 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='emergencyContactPhone'  className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value= {employee.emergencyContactPhone}
                  name="emergencyContactPhone"
                  required 
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='emergencyContactAddress' className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value= {employee.emergencyContactAddress}
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
                <label htmlFor='bankName' className="block text-sm font-medium text-gray-700">Bank Name</label>
                <input
                  type="text"
                  value= {employee.bankName}
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
                  value= {employee.accountName}
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
                  value= {employee.accountNumber}
                  required
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label htmlFor='salary'  className="block text-sm font-medium text-gray-700">Salary</label>
                <input
                  type="number"
                  value= {employee.salary}
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
