import mongoose from "mongoose";

const userSChema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum: ["hr", "employee", "projectCo", "executiveDir"], required: true},
    createAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})
const User = mongoose.model("User", userSChema)

export default User