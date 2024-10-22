import React from 'react'
import Sidebar from '../EmployeeDashboard/Sidebar'
import Navbar from '../Dashboard/Navbar'


const ProjectCoordinator = () => {
    const { user } = useContext(AuthContext); // Get logged-in user info (Project Coordinator)
    const [employees, setEmployees] = useState([]); // State to store employees under the coordinator
    const [loading, setLoading] = useState(true); // State to handle loading spinner
    const [error, setError] = useState(null); // State to handle error
  
    useEffect(() => {
      // Fetch employees assigned to the project coordinator on component mount
      const fetchEmployees = async () => {
        try {
          const res = await employeeService.getEmployeesByCoordinator(user._id); // API call to get employees
          setEmployees(res.data); // Set the employees in state
          setLoading(false); // Disable loading
        } catch (err) {
          setError('Failed to fetch employees');
          setLoading(false);
        }
      };
  
      fetchEmployees();
    }, [user._id]);
  
    if (loading) return <p>Loading...</p>; // Display loading message if data is being fetched
  
    if (error) return <p>{error}</p>; // Display error message if there was an error
  
    return (
      <div className="dashboard-container">
        <Navbar />
        <Sidebar />
        <div className="dashboard-content">
          <h2>Project Coordinator Dashboard</h2>
          <p>Welcome, {user.name}. Here are the employees assigned to you:</p>
          {employees.length > 0 ? (
            <EmployeeTable employees={employees} />
          ) : (
            <p>No employees assigned to you yet.</p>
          )}
        </div>
      </div>
    );
  };
  

export default ProjectCoordinator
