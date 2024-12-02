// import axios from "axios";
// import { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AddProject = () => {
//   const [project, setProject] = useState({
//     project_name: "",
//     description: "",
//     start_date: "",
//     end_date: "",
//     status: "active",
//     assigned_employees: [], // Add this field
//   });
//   const [employees, setEmployees] = useState([]); // For storing employees
//   const [selectedEmployees, setSelectedEmployees] = useState([]); // For managing selected employees
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProject({ ...project, [name]: value });
//   };
//   const handleEmployeeChange = (e) => {
//     const options = e.target.options;
//     const selected = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) {
//         selected.push(options[i].value);
//       }
//     }
//     setSelectedEmployees(selected);
//     setProject({ ...project, assigned_employees: selected }); // Update assigned employees in project state
//   };


//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/project/add",
//         project,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         navigate("/hr_dashboard/project");
//       }
//     } catch (error) {
//       if (error.response && !error.response.data.success) {
//         alert(error.response.data.error);
//       }
//     }
//   };
//   // Fetch employees when the component mounts
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/employee", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         if (response.data.success) {
//           setEmployees(response.data.employees);
//         }
//       } catch (error) {
//         console.error("Failed to fetch employees:", error);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Add New Project Form */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4 text-maryBlue">Add New Project</h2>
//         <form
//           className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
//           onSubmit={handleSubmit}
//         >
//           <fieldset className="border border-maryBlue p-4 rounded-md">
//             <legend className="text-lg font-medium text-maryOrange">
//               Project Information
//             </legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label
//                   htmlFor="project_name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Project Name
//                 </label>
//                 <input
//                   type="text"
//                   name="project_name"
//                   placeholder="Project Name"
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="description"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Project Description
//                 </label>
//                 <textarea
//                   name="description"
//                   placeholder="Description"
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="start_date"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="start_date"
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                   required
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="end_date"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   End Date
//                 </label>
//                 <input
//                   type="date"
//                   name="end_date"
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="status"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Status
//                 </label>
//                 <select
//                   name="status"
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 >
//                   <option value="active">Active</option>
//                   <option value="completed">Completed</option>
//                   <option value="on hold">On Hold</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="assigned_employees" className="block text-sm font-medium text-gray-700">
//                   Assign Employees
//                 </label>
//                 <select
//                   name="assigned_employees"
//                   multiple
//                   value={selectedEmployees}
//                   onChange={handleEmployeeChange}
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                 >
//                   {employees.map((employee) => (
//                     <option key={employee._id} value={employee._id}>
//                       {employee.name} {/* Adjust according to your employee structure */}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </fieldset>

//           <div className="text-right mt-4">
//             <button
//               type="submit"
//               className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
//             >
//               Add Project
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProject;
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {fetchCoordinators} from '../utils/ProjectHelper.jsx'


const AddProject = () => {
  const [project, setProject] = useState({
    project_name: "",
    description: "",
    start_date: "",
    end_date: "",
    status: "active",
    assigned_coordinator: "", // Change this field to assigned_coordinator
  });

  const [coordinators, setCoordinators] = useState([]); // For storing project coordinators

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({...project, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/project/add",
        project,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/hr_dashboard/projects");
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  // Fetch project coordinators when the component mounts
  useEffect(() => {
    const getCoordinators = async () => {
      const coordinators = await fetchCoordinators()
      setCoordinators(coordinators);
      
    };
    getCoordinators();
    
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-maryBlue">Add New Project</h2>
        <form
          className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
          onSubmit={handleSubmit}
        >
          <fieldset className="border border-maryBlue p-4 rounded-md">
            <legend className="text-lg font-medium text-maryOrange">
              Project Information
            </legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="proj_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Name
                </label>
                <input
                  type="text"
                  name="proj_name"
                  placeholder="Project Name"
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Project Description
                </label>
                <textarea
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="start_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  name="start_date"
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="end_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <input
                  type="date"
                  name="end_date"
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                />
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  name="status"
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                >
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="on hold">On Hold</option>
                </select>
              </div>
              <div>
                <label htmlFor="assigned_coordinator" className="block text-sm font-medium text-gray-700">
                  Project Coordinator
                </label>
                <select
                  name="assigned_coordinator"
                  value={project.assigned_coordinator}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  required
                >
                  <option value="">Select Coordinator</option>
                  {coordinators.map((co) => (
                    <option key={co._id} value={co._id}> {co.co_name} {/* Adjust according to your coordinator structure */}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </fieldset>

          <div className="text-right mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProject;
