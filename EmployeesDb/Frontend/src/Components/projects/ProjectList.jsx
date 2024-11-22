// import axios from "axios";
// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { columns, ProjectBtn } from "../utils/ProjectHelper.jsx";
// import { Link } from "react-router-dom";

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [projectLoading, setProjectLoading] = useState(false);
//   const [filteredProjects, setFilteredProjects] = useState([]);

//   const onProjectDelete = async (id) => {
//     const data = projects.filter((proj) => proj._id !== id);
//     setProjects(data);
//   };

//   useEffect(() => {
//     const fetchProjects = async () => {
//       setProjectLoading(true);
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/projects",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         if (response.data.success) {
//           let no = 1;

//           const data = await response.data.projects.map((proj) => ({
//             _id: proj._id,
//             no: no++,
//             project_name: proj.project_name,
//             start_date: proj.start_date,
//             end_date: proj.end_date,
//             action: (
//               <ProjectBtn Id={proj._id} onProjectDelete={onProjectDelete} />
//             ),
//           }));
//           setProjects(data);
//           setFilteredProjects(data);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       } finally {
//         setProjectLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const filterProjects = (e) => {
//     const records = projects.filter((proj) =>
//       proj.project_name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setFilteredProjects(records);
//   };

//   return (
//     <>
//       {projectLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <div className="p-5">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-6 text-maryBlue">
//               Manage Projects
//             </h1>
//           </div>
//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Search By Project Name"
//               className="px-4 py-0.5 border"
//               onChange={filterProjects}
//             />
//             <Link
//               to="/hr_dashboard/add-project"
//               className="px-4 py-1 bg-maryBlue rounded text-white"
//             >
//               Add New Project
//             </Link>
//           </div>

//           {/* Project Table */}
//           <div className="mt-5">
//             <DataTable columns={columns} data={filteredProjects} pagination />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectList;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { columns, ProjectBtn } from "../utils/ProjectHelper.jsx";
// import { Link } from "react-router-dom";

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [projectLoading, setProjectLoading] = useState(false);
//   const [filteredProjects, setFilteredProjects] = useState([]);

//   const onProjectDelete = async (id) => {
//     const data = projects.filter((proj) => proj._id !== id);
//     setProjects(data);
//   };

//   useEffect(() => {
//     const fetchProjects = async () => {
//       setProjectLoading(true);
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/project",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         if (response.data.success) {
//           let no = 1;

//           const data = response.data.projects.map((proj) => ({
//             _id: proj._id,
//             no: no++,
//             project_name: proj.project_name,
//             start_date: proj.start_date,
//             end_date: proj.end_date,
//             assigned_employees: proj.assigned_employees.map(emp => emp.name).join(', '), // Assuming assigned_employees is an array of objects
//             action: (
//               <ProjectBtn Id={proj._id} onProjectDelete={onProjectDelete} />
//             ),
//           }));
//           setProjects(data);
//           setFilteredProjects(data);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       } finally {
//         setProjectLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const filterProjects = (e) => {
//     const records = projects.filter((proj) =>
//       proj.project_name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setFilteredProjects(records);
//   };

//   return (
//     <>
//       {projectLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <div className="p-5">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-6 text-maryBlue">
//               Manage Projects
//             </h1>
//           </div>
//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Search By Project Name"
//               className="px-4 py-0.5 border"
//               onChange={filterProjects}
//             />
//             <Link
//               to="/hr_dashboard/add-project"
//               className="px-4 py-1 bg-maryBlue rounded text-white"
//             >
//               Add New Project
//             </Link>
//           </div>

//           {/* Project Table */}
//           <div className="mt-5">
//             <DataTable
//               columns={[
//                 ...columns,
//                 {
//                   name: 'Assigned Employees',
//                   selector: 'assigned_employees',
//                   sortable: true,
//                 },
//               ]}
//               data={filteredProjects}
//               pagination
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectList;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { columns, ProjectBtn } from "../utils/ProjectHelper.jsx";
// import { Link } from "react-router-dom";

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [projectLoading, setProjectLoading] = useState(false);
//   const [filteredProjects, setFilteredProjects] = useState([]);

//   const onProjectDelete = async (id) => {
//     const data = projects.filter((proj) => proj._id !== id);
//     setProjects(data);
//   };

//   useEffect(() => {
//     const fetchProjects = async () => {
//       setProjectLoading(true);
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/api/project",
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );
//         if (response.data.success) {
//           let no = 1;

//           const data = await response.data.projects.map((proj) => ({
//             _id: proj._id,
//             no: no++,
//             project_name: proj.project_name,
//             start_date: proj.start_date,
//             end_date: proj.end_date,
//             assigned_coordinator:proj.assigned_coordinator,
//             action: (
//               <ProjectBtn Id={proj._id} onProjectDelete={onProjectDelete} />
//             ),
//           }));
//           setProjects(data);
//           setFilteredProjects(data);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       } finally {
//         setProjectLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const filterProjects = (e) => {
//     const records = projects.filter((proj) =>
//       proj.project_name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     setFilteredProjects(records);
//   };

//   return (
//     <>
//       {projectLoading ? (
//         <div>Loading ...</div>
//       ) : (
//         <div className="p-5">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-6 text-maryBlue">
//               Manage Projects
//             </h1>
//           </div>
//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Search By Project Name"
//               className="px-4 py-0.5 border"
//               onChange={filterProjects}
//             />
//             <Link
//               to="/hr_dashboard/add-project"
//               className="px-4 py-1 bg-maryBlue rounded text-white"
//             >
//               Add New Project
//             </Link>
//           </div>

//           {/* Project Table */}
//           <div className="mt-5">
//             <DataTable columns={columns} data={filteredProjects} pagination />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectList;
// ProjectList.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, ProjectBtn } from "../utils/ProjectHelper.jsx";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [projectLoading, setProjectLoading] = useState(false)
  const [filteredProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {

      setProjectLoading(true);
      try {
        const responnse = await axios.get(
          "https://mjemployeemanagment.onrender.com/api/project",
            {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,                 
            },
          }
        );
        console.log(responnse.data)
        if (responnse.data.success) {

          let no = 1;

          const data = await responnse.data.projects.map((proj) => ({
            
            _id: proj._id,
            no: no++,
            proj_name: proj.proj_name,
            start_date: proj.start_date,
            end_date: proj.end_date,
            assigned_coordinator:proj.assigned_coordinator,
            action: ( <ProjectBtn Id={proj._id} /> ),
          }
        )
      );
      setProjects(data);
      setFilterProjects(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error)
        }
      } finally {
        setProjectLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleFilter = (e) => {
    const records = projects.filter((proj) => (
       proj.proj_name.toLowerCase().includes(e.target.value.toLowerCase())
    ))
    setFilterProjects(records);
  }

  return (
    <>
      {projectLoading ? 
        <div>Loading ...</div>
       : 
        <div className="p-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6 text-maryBlue">Manage Projects</h1>
          </div>
          <div className="flex justify-between items-center">
            <input type="text" placeholder="Search By Project Name" className="px-4 py-0.5 border" onChange={handleFilter} />
            <Link to="/hr_dashboard/add-project" className="px-4 py-1 bg-maryBlue rounded text-white">
              Add New Project
            </Link>
          </div>
          <div className="mt-5">
            <DataTable columns={columns} data={filteredProjects} pagination />
          </div>
        </div>
      }
    </>
  );
};

export default ProjectList;
