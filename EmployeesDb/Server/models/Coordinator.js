import mongoose from "mongoose";
import Employee from '../models/Employee.js'

const coordinatorSchema = new mongoose.Schema({
    co_name: {type: String, required: true},
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

coordinatorSchema.pre("deleteOne", {document: true, query: false}, async function(next) {
    try {
        const employees = await Employee.find({coordinator: this._id})
        const empIds =  employees.map(co => co._id)

        await Employee.deleteMany({coordinator: this._id})
        await Leave.deleteMany({employeeId: {$in : empIds}})
        next()
        
    } catch(error) {
        next(error)
    }
} )

const Coordinator = mongoose.model("Coordinator", coordinatorSchema)
export default Coordinator;