import React from 'react'
import Sidebar from '../EmployeeDashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'
import { Outlet } from 'react-router-dom'

const ExecutiveDirector = () => {
    
        const { user } = useContext(AuthContext); // Get logged-in user info (Executive Director)
        const [employees, setEmployees] = useState([]); // State to store all employees
        const [loading, setLoading] = useState(true); // State to handle loading spinner
        const [error, setError] = useState(null); // State to handle error
      
        useEffect(() => {
          // Fetch all employees on component mount
          const fetchAllEmployees = async () => {
            try {
              const res = await employeeService.getAllEmployees(); // API call to get all employees
              setEmployees(res.data); // Set the employees in state
              setLoading(false); // Disable loading
            } catch (err) {
              setError('Failed to fetch employees');
              setLoading(false);
            }
          };
      
          fetchAllEmployees();
        }, []);
      
        if (loading) return <p>Loading...</p>; // Display loading message if data is being fetched
      
        if (error) return <p>{error}</p>; // Display error message if there was an error
      
        return (
          <div className="dashboard-container">
            <Navbar />
            <Sidebar />
            <div className="dashboard-content">
              <h2>Executive Director Dashboard</h2>
              <p>Welcome, {user.name}. Here is the complete list of employees:</p>
              {employees.length > 0 ? (
                <EmployeeTable employees={employees} />
              ) : (
                <p>No employees found.</p>
              )}
            </div>
          </div>
        );
      };
      
      

export default ExecutiveDirector
