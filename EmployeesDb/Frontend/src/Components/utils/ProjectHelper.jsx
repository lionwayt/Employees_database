// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const columns = [
//   {
//     name: "No",
//     selector: (row) => row.no,
//   },
//   {
//     name: "Project Name",
//     selector: (row) => row.project_name,
//     sortable: true,
//   },
//   {
//     name: "Start Date",
//     selector: (row) => row.start_date,
//     sortable: true,
//   },
//   {
//     name: "End Date",
//     selector: (row) => row.end_date,
//     sortable: true,
//   },
//   {
//     name: "Assigned Employees",
//     selector: (row) => row.assigned_employees?.join(", ") || "No employees assigned",
//     sortable: true,
//   },
//   {
//     name: "Action",
//     selector: (row) => row.action,
//   },
// ];

// export const ProjectBtn = ({ Id, onProjectDelete }) => {
//   const navigate = useNavigate();

//   const handleDelete = async (Id) => {
//     const confirm = window.confirm("Do you want to delete this project?");
//     if (confirm) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:3000/api/project/${Id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           onProjectDelete(Id);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex space-x-3">
//       <button
//         className="px-3 py-1 bg-maryBlue text-white"
//         onClick={() => navigate(`/hr_dashboard/project/edit-project/${Id}`)}
//       >
        
//         Edit
//       </button>
//       <button
//         className="px-3 py-1 bg-red-600 text-white"
//         onClick={() => handleDelete(Id)}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const columns = [
//   {
//     name: "No",
//     selector: (row) => row.no,
//   },
//   {
//     name: "Project Name",
//     selector: (row) => row.project_name,
//     sortable: true,
//   },
//   {
//     name: "Start Date",
//     selector: (row) => row.start_date,
//     sortable: true,
//   },
//   {
//     name: "End Date",
//     selector: (row) => row.end_date,
//     sortable: true,
//   },
//   {
//     name: "Project Coordinator", 
//     selector: (row) => row.assigned_coordinator_name ? row.assigned_coordinator_name : "No coordinator assigned",
//     sortable: true,
//   },
//   {
//     name: "Action",
//     selector: (row) => row.action,
//   },
// ];
// // In projectHelper.jsx



// export const ProjectBtn = ({ Id, onProjectDelete }) => {
//   const navigate = useNavigate();

//   const handleDelete = async (Id) => {
//     const confirm = window.confirm("Do you want to delete this project?");
//     if (confirm) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:3000/api/project/${Id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         );

//         if (response.data.success) {
//           onProjectDelete(Id);
//         }
//       } catch (error) {
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex space-x-3">
//       <button
//         className="px-3 py-1 bg-maryBlue text-white"
//         onClick={() => navigate(`/hr_dashboard/project/edit-project/${Id}`)}
//       >
//         Edit
//       </button>
//       <button
//         className="px-3 py-1 bg-red-600 text-white"
//         onClick={() => handleDelete(Id)}
//       >
//         Delete
//       </button>
//     </div>
//   );
// };
// ProjectHelper.jsx
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Columns for DataTable
// export const columns = [
//   { name: "No", selector: (row) => row.no },
//   { name: "Project Name", selector: (row) => row.project_name, sortable: true },
//   { name: "Start Date", selector: (row) => row.start_date, sortable: true },
//   { name: "End Date", selector: (row) => row.end_date, sortable: true },
//   { name: "Project Coordinator", selector: (row) => row.assigned_coordinator_name || "No coordinator assigned", sortable: true },
//   { name: "Action", selector: (row) => row.action },
// ];

// // Project Button component with Delete and Edit functionality
// export const ProjectBtn = ({ Id, onProjectDelete }) => {
//   const navigate = useNavigate();

//   const handleDelete = async (Id) => {
//     const confirm = window.confirm("Do you want to delete this project?");
//     if (confirm) {
//       try {
//         const response = await axios.delete(`http://localhost:3000/api/project/${Id}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });

//         if (response.data.success) {
//           onProjectDelete(Id);
//         }
//       } catch (error) {
//         alert(error.response?.data.error || "Error deleting project.");
//       }
//     }
//   };

//   return (
//     <div className="flex space-x-3">
//       <button className="px-3 py-1 bg-maryBlue text-white" onClick={() => navigate(`/hr_dashboard/project/edit-project/${Id}`)}>
//         Edit
//       </button>
//       <button className="px-3 py-1 bg-red-600 text-white" onClick={() => handleDelete(Id)}>
//         Delete
//       </button>
//     </div>
//   );
// };
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Columns for DataTable
export const columns = [
  { name: "No", selector: (row) => row.no },
  { name: "Project Name", selector: (row) => row.proj_name, sortable: true },
  { name: "Start Date", selector: (row) => row.start_date, sortable: true },
  { name: "End Date", selector: (row) => row.end_date, sortable: true },
  { name: "Project Coordinator", selector: (row) => row.assigned_coordinator_name || "No coordinator assigned", sortable: true },
  { name: "Action", selector: (row) => row.action },
];

export const fetchCoordinators = async () => {

  let coordinators
      
      try {
        const responnse =  await axios.get(
          'http://localhost:3000/api/coordinator',
          
           {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
        if(responnse.data.success) {
          coordinators = responnse.data.coordinators
        }
       } catch(error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
       }
    } 
    return coordinators
  }; 

// Project Button component with Delete and Edit functionality
export const ProjectBtn = ({Id, onProjectDelete  }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
    try {
       
        const responnse =  await axios.delete(
            `https://mjemployeemanagment.onrender.com/api/project/${id}`,
             {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
    });
       
        if(responnse.data.success) {
            onProjectDelete();
        }
       } catch(error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
       }
    }
}
}
  

  return (
    <div className="flex space-x-3">
      <button className="px-3 py-1 bg-maryBlue text-white" onClick={() => navigate(`/hr_dashboard/project/edit-project/${Id}`)}>
        Edit
      </button>
      <button className="px-3 py-1 bg-red-600 text-white" onClick={() => handleDelete(Id)}>
        Delete
      </button>
    </div>
  );
};

