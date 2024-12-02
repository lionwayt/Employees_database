
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const EditProject = () => {
//   const { id } = useParams();
//   const [project, setProject] = useState({
//     project_name: '',
//     start_date: '',
//     end_date: '',
//     description: '',
//     assigned_employees: [], // To hold assigned employee IDs
//   });
//   const [allEmployees, setAllEmployees] = useState([]); // To hold all employees
//   const [projLoading, setProjLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProject = async () => {
//       setProjLoading(true);
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/api/project/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           setProject(response.data.project);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       } finally {
//         setProjLoading(false);
//       }
//     };

//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/employees', {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         if (response.data.success) {
//           setAllEmployees(response.data.employees);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       }
//     };

//     fetchProject();
//     fetchEmployees();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProject({ ...project, [name]: value });
//   };

//   const handleEmployeeChange = (e) => {
//     const { options } = e.target;
//     const selectedEmployees = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) {
//         selectedEmployees.push(options[i].value);
//       }
//     }
//     setProject({ ...project, assigned_employees: selectedEmployees });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(
//         `http://localhost:3000/api/project/${id}`,
//         project,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         navigate('/hr_dashboard/projects');
//       }
//     } catch (error) {
//       if (error.response && !error.response.data.success) {
//         alert(error.response.data.error);
//       }
//     }
//   };

//   return (
//     <>
//       {projLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <div className="container mx-auto px-4 py-8">
//           {/* Edit Project Form */}
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold mb-4 text-maryBlue">Edit Project</h2>
//             <form
//               className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
//               onSubmit={handleSubmit}
//             >
//               <fieldset className="border border-maryBlue p-4 rounded-md">
//                 <legend className="text-lg font-medium text-maryOrange">Project Information</legend>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <label
//                       htmlFor="project_name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Project Name
//                     </label>
//                     <input
//                       type="text"
//                       name="project_name"
//                       placeholder="Project Name"
//                       value={project.project_name}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="start_date"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Start Date
//                     </label>
//                     <input
//                       type="date"
//                       name="start_date"
//                       value={project.start_date}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="end_date"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       End Date
//                     </label>
//                     <input
//                       type="date"
//                       name="end_date"
//                       value={project.end_date}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="description"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Project Description
//                     </label>
//                     <input
//                       type="text"
//                       name="description"
//                       placeholder="Project Description"
//                       value={project.description}
//                       onChange={handleChange}
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                     />
//                   </div>
//                 </div>
//               </fieldset>

//               <fieldset className="border border-maryBlue p-4 rounded-md mt-6">
//                 <legend className="text-lg font-medium text-maryOrange">Assigned Employees</legend>
//                 <div className="mt-4">
//                   <select
//                     multiple
//                     name="assigned_employees"
//                     value={project.assigned_employees}
//                     onChange={handleEmployeeChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
//                   >
//                     {allEmployees.map((employee) => (
//                       <option key={employee._id} value={employee._id}>
//                         {employee.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </fieldset>

//               <button
//                 type="submit"
//                 className="mt-6 px-4 py-2 bg-maryBlue text-white rounded-md hover:bg-maryOrange"
//               >
//                 Update Project
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditProject;
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState({
    project_name: '',
    start_date: '',
    end_date: '',
    description: '',
    assigned_coordinator: '', // Change this to hold the assigned coordinator ID
  });
  const [allEmployees, setAllEmployees] = useState([]); // To hold all coordinators
  const [projLoading, setProjLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProject = async () => {
      setProjLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/project/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        if (response.data.success) {
          setProject(response.data.project);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setProjLoading(false);
      }
    };

    const fetchCoordinators = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/employees/coordinators`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (response.data.success) {
          setAllEmployees(response.data.coordinators); // Store the coordinators
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };

    fetchProject();
    fetchCoordinators(); // Call the new fetchCoordinators function
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/api/project/${id}`,
        project,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (response.data.success) {
        navigate('/hr_dashboard/projects');
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <>
      {projLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-maryBlue">Edit Project</h2>
            <form
              className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
              onSubmit={handleSubmit}
            >
              <fieldset className="border border-maryBlue p-4 rounded-md">
                <legend className="text-lg font-medium text-maryOrange">Project Information</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label
                      htmlFor="project_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Name
                    </label>
                    <input
                      type="text"
                      name="project_name"
                      placeholder="Project Name"
                      value={project.project_name}
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
                      value={project.start_date}
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
                      value={project.end_date}
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
                      Description
                    </label>
                    <textarea
                      name="description"
                      rows="3"
                      placeholder="Project Description"
                      value={project.description}
                      onChange={handleChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="border border-maryBlue p-4 rounded-md mt-6">
                <legend className="text-lg font-medium text-maryOrange">Assigned Project Coordinator</legend>
                <div className="mt-4">
                  <select
                    name="assigned_coordinator"
                    value={project.assigned_coordinator}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
                  >
                    <option value="">Select a Coordinator</option>
                    {allEmployees.map((coordinator) => (
                      <option key={coordinator._id} value={coordinator.employeeId}>
                        {coordinator.userName}
                      </option>
                    ))}
                  </select>
                </div>
              </fieldset>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-maryOrange hover:bg-maryBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maryOrange"
                >
                  Update Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProject;
