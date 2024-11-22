// import mongoose from "mongoose";

// const projectSchema = new mongoose.Schema({
//     project_name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String
//     },
//     start_date: {
//         type: Date
//     },
//     end_date: {
//         type: Date
//     },
//     assignedEmployees: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Employee"  // Assuming an "Employee" model exists
//     }]
// });

// export default mongoose.model("Project", projectSchema);
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    proj_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    assigned_coordinator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee", // Assuming the coordinator is also an Employee
        required: true, // Optional: enforce that a coordinator must be assigned
    },
});

export default mongoose.model("Project", projectSchema);
