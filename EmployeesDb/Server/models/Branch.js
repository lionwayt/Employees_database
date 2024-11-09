import mongoose from "mongoose";


const branchSchema = new mongoose.Schema({
    branch_name: {type: String, required: true},
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Branch = mongoose.model("Branch", branchSchema)
export default Branch;