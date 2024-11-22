// import Project from "../models/Project.js";

// // Get all projects
// const getProjects = async (req, res) => {
//     try {
//         const projects = await Project.find().populate('assignedEmployees', 'name role'); // Customize fields as needed
//         return res.status(200).json({ success: true, projects });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "get projects server error" });
//     }
// };

// // Add a new project with assigned employees
// const addProject = async (req, res) => {
//     try {
//         const { project_name, description, start_date, end_date, assignedEmployees } = req.body;
//         const newProject = new Project({
//             project_name,
//             description,
//             start_date,
//             end_date,
//             assignedEmployees
//         });
//         await newProject.save();
//         return res.status(200).json({ success: true, project: newProject });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "add project server error" });
//     }
// };

// // Get a single project by ID
// const getProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const project = await Project.findById(id).populate('assignedEmployees', 'name role');
//         if (!project) {
//             return res.status(404).json({ success: false, error: "Project not found" });
//         }
//         return res.status(200).json({ success: true, project });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "get project server error" });
//     }
// };

// // Update a project by ID, including assigned employees
// const updateProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { project_name, description, start_date, end_date, assignedEmployees } = req.body;
//         const updatedProject = await Project.findByIdAndUpdate(
//             id,
//             { project_name, description, start_date, end_date, assignedEmployees },
//             { new: true }
//         ).populate('assignedEmployees', 'name role');
        
//         if (!updatedProject) {
//             return res.status(404).json({ success: false, error: "Project not found" });
//         }
//         return res.status(200).json({ success: true, project: updatedProject });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "edit project server error" });
//     }
// };

// // Delete a project by ID
// const deleteProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedProject = await Project.findByIdAndDelete(id);
//         if (!deletedProject) {
//             return res.status(404).json({ success: false, error: "Project not found" });
//         }
//         return res.status(200).json({ success: true, project: deletedProject });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "delete project server error" });
//     }
// };

// export { addProject, getProject, updateProject, getProjects, deleteProject };
// import Project from "../models/Project.js";
// import User from "../models/User.js";
// import Employee from "../models/Employee.js";
// // Get all projects
// const getProjects = async (req, res) => {
//     try {
//       const projects = await Project.find();
  
//       // Fetch all unique assigned_coordinator IDs
//       const coordinatorIds = projects.map((project) => project.assigned_coordinator);
//       const employees = await Employee.find({ _id: { $in: coordinatorIds } });
  
//       // Fetch user IDs based on employee data
//       const userIds = employees.map((emp) => emp.userId);
//       const users = await User.find({ _id: { $in: userIds } }).select('name');
  
//       // Create a lookup map for faster access
//       const employeeMap = employees.reduce((acc, emp) => {
//         acc[emp._id] = emp;
//         return acc;
//       }, {});
  
//       const userMap = users.reduce((acc, user) => {
//         acc[user._id] = user.name;
//         return acc;
//       }, {});
  
//       // Construct the projects with coordinator names
//       const projectsWithCoordinatorName = projects.map((project) => {
//         const employee = employeeMap[project.assigned_coordinator];
//         const userName = employee ? userMap[employee.userId] : "Nooooooooo";
//         return {
//           ...project._doc,
//           assigned_coordinator_name: userName,
//         };
//       });
      
//       return res.status(200).json({
//         success: true,
//         projects: projectsWithCoordinatorName,
//       });
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//       return res.status(500).json({ success: false, error: 'Server error while fetching projects' });
//     }
//   };
  

// //     try {
// //       const projects = await Project.find()
// //         .populate({
// //           path: 'assigned_coordinator',
// //           select: 'name role', // Only fetch name and role fields
// //         });
  
// //       return res.status(200).json({ success: true, projects });
// //     } catch (error) {
// //       console.error(error);
// //       return res.status(500).json({ success: false, error: "Server error while fetching projects" });
// //     }
// //   };
  
// // Add a new project with assigned coordinator
// const addProject = async (req, res) => {
//     try {
//         const { project_name, description, start_date, end_date, assigned_coordinator } = req.body; // Changed to assigned_coordinator
//         const newProject = new Project({
//             project_name,
//             description,
//             start_date,
//             end_date,
//             assigned_coordinator // Updated to use the new field
//         });
//         await newProject.save();
//         return res.status(200).json({ success: true, project: newProject });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "add project server error" });
//     }
// };

// const getProject = async (req, res) => { 
//     try { 
//         const { id } = req.params; 

//         // Fetch the project by ID
//         const project = await Project.findById(id);
//         if (!project) { 
//             return res.status(404).json({ success: false, error: "Project not found" }); 
//         }

//         // Fetch the user details based on the assigned_coordinator ID
//         const user = await User.findById(project.assigned_coordinator).select('name role');
//         if (!user) {
//             return res.status(404).json({ success: false, error: "Assigned coordinator not found" });
//         }

//         // Attach the user details to the response
//         const projectWithCoordinator = {
//             ...project._doc, // Spread the project details
//             assigned_coordinator: {
//                 _id: user._id,
//                 name: user.name,
//                 role: user.role
//             }
//         };

//         return res.status(200).json({ success: true, project: projectWithCoordinator }); 
//     } catch (error) { 
//         console.error(error); 
//         return res.status(500).json({ success: false, error: "get project server error" }); 
//     } 
// };
// // Update a project by ID, including assigned coordinator
// // const updateProject = async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const { project_name, description, start_date, end_date, assigned_coordinator } = req.body; // Changed to assigned_coordinator
// //         const updatedProject = await Project.findByIdAndUpdate(
// //             id,
// //             { project_name, description, start_date, end_date, assigned_coordinator }, // Updated to use the new field
// //             { new: true }
// //         ).populate('assigned_coordinator', 'name role'); // Adjusted for the new field
        
// //         if (!updatedProject) {
// //             return res.status(404).json({ success: false, error: "Project not found" });
// //         }
// //         return res.status(200).json({ success: true, project: updatedProject });
// //     } catch (error) {
// //         console.error(error);
// //         return res.status(500).json({ success: false, error: "edit project server error" });
// //     }
// // };
// const updateProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { project_name, description, start_date, end_date, assigned_coordinator } = req.body;
        
//         const updatedProject = await Project.findByIdAndUpdate(
//             id,
//             { project_name, description, start_date, end_date, assigned_coordinator },
//             { new: true }
//         ).populate('assigned_coordinator', 'name role'); 
        
//         if (!updatedProject) {
//             return res.status(404).json({ success: false, error: "Project not found" });
//         }
        
//         return res.status(200).json({ success: true, project: updatedProject });
//     } catch (error) {
//         console.error("Error updating project:", error.message, error.stack);
//         return res.status(500).json({ success: false, error: "Edit project server error" });
//     }
// };

// // Delete a project by ID
// const deleteProject = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedProject = await Project.findByIdAndDelete(id);
//         if (!deletedProject) {
//             return res.status(404).json({ success: false, error: "Project not found" });
//         }
//         return res.status(200).json({ success: true, project: deletedProject });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, error: "delete project server error" });
//     }
// };

// export { addProject, getProject, updateProject, getProjects, deleteProject };
// projectController.js
import Project from "../models/Project.js";
import User from "../models/User.js";
import Employee from "../models/Employee.js";

// Get all projects with coordinator name
// In projectController.js
export const getProjects = async (req, res) => {
    try {
      // Retrieve all projects and populate the assigned_coordinator field
      const projects = await Project.find()
      return res.status(200).json({success: true, projects})
    } catch (error){
        return res.status(500).json({success: false, error: "get project server error"})
    }
        }
  

// Add a new project
export const addProject = async (req, res) => {
  try {
    const { proj_name, description, start_date, end_date, assigned_coordinator } = req.body;
    const newProj = new Project({ proj_name, description, start_date, end_date, assigned_coordinator });
    await newProj.save();
    return res.status(200).json({ success: true, project: newProj });
  } catch (error) {
    console.error("Error adding project:", error);
    return res.status(500).json({ success: false, error: "Server error while adding project" });
  }
};

// Get a specific project by ID
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ success: false, error: "Project not found" });

    const user = await User.findById(project.assigned_coordinator).select("name role");
    const projectWithCoordinator = {...project._doc, assigned_coordinator: user ? {...user._doc } : null };

    return res.status(200).json({ success: true, project: projectWithCoordinator });
  } catch (error) {
    console.error("Error getting project:", error);
    return res.status(500).json({ success: false, error: "Server error while fetching project" });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("assigned_coordinator", "name role");
    if (!updatedProject) return res.status(404).json({ success: false, error: "Project not found" });

    return res.status(200).json({ success: true, project: updatedProject });
  } catch (error) {
    console.error("Error updating project:", error);
    return res.status(500).json({ success: false, error: "Server error while updating project" });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ success: false, error: "Project not found" });

    return res.status(200).json({ success: true, project: deletedProject });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res.status(500).json({ success: false, error: "Server error while deleting project" });
  }
};
