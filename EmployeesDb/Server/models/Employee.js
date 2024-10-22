import mongoose from "mongoose";
import { Schema } from "mongoose";

const employeeSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
  employeeId: {type: String, required: true, unique: true },
  dob: { type: Date },
  address: { type: String, required: true},
  phone: { type: String, required: true, unique: true},
  position: {type: String},
  department: {type: Schema.Types.ObjectId, ref:"Department", required: true,},
  startDate: { type: Date, default: Date.now},
  employmentType: {type: String},
  workEmail: {type: String},
  workPhone: { type: String},
  emergencyContactName: {type: Date},
  emergencyContactRelationship: { type: String},
  emergencyContactPhone: { type: String},
  emergencyContactAddress: {type: String},
  bankName: {type: String},
  accountName: {type: String},
  accountNumber: {type: String},
  Salary: { type: Number, required: true},
  createAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},

});


const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
