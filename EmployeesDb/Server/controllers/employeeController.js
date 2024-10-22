import path from "path";
import Employee from "../models/Employee.js";
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import multer from "multer"

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.orginalname))
    }
})
 const upload = multer({storage: storage})

const addEmployee = async (req, res) => {
    try {
    const {
      
        employeeId,
        dob,
        address,
        phone,
        position,
        department,
        startDate,
        employmentType,
        workEmail,
        workPhone,
        emergencyContactName,
        emergencyContactRelationship,
        emergencyContactPhone,
        emergencyContactAddress,
        bankName,
        accountName,
        accountNumber,
        Salary,
        createAt,
        updatedAt,
    
} = req.body;

const user = await User.findOne({email})
if(user) {
    return res.status(400).json({success: false, error: "user already registered"});
}

const hashPassword = await bcrypt.hash(password, 10)

const newUser = new User({
    name,
    email,
    password: hashPassword, 
    role,
})
const savedUser = await newUser.save()

const newEmployee = new Employee({
    userId: savedUser._id,
    employeeId,
    dob,
    address,
    phone,
    position,
    department,
    startDate,
    employmentType,
    workEmail,
    workPhone,
    emergencyContactName,
    emergencyContactRelationship,
    emergencyContactPhone,
    emergencyContactAddress,
    bankName,
    accountName,
    accountNumber,
    Salary,
    createAt,
    updatedAt,
})

await newEmployee.save()
return res.status(200).json({success: true, message: "employee created"})
} catch(error) {
  console.log(error)
    return res.status(500).json({success: false, error: "server error in adding employee"})

}}
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('userId', {password: 0}).populate("employee")
        return res.status(200).json({success: true, employees})
    } catch (error){
        return res.status(500).json({success: false, error: "get employee server error"})
    }

}

const getEmployee = async (req, res) => {
    const {id} = req.params;
    try {
        const employee = await Employee.findById({_id: id}).populate('userId', {password: 0}).populate("employee")
        return res.status(200).json({success: true, employee})
    } catch (error){
        return res.status(500).json({success: false, error: "get employee server error"})
    }

}


const updateEmployee = async (req, res) => {
    const {id} = req.params;
    try {
        const {
            name,
        
            
        } = req.body;

        const employee = await Employee.findById({_id: id})
        if(!employee) {
            return res.status(404).json({success: false, error: "employee not found"})
        }

        const user = await User.findById({_id: employee.userId})
        if(!employee) {
            return res.status(404)
            .json({success: false, error: "user not found"})
        }
    const updateUser = await User.findByIdAndUpdate({_id: employee.userId}, {name})
    const updateEmployee = await Employee.findByIdAndUpdate({_id: id}, {
        name,
    })
      
    if(!updateEmployee || !updateUser) {
        return res.status(404)
        .json({success: false, error: "doc not found"})
    }
    return res.status(200).json({success: true, message: "Employee update"})
    } catch (error){
        return res.status(500).json({success: false, error: "update employee server error"})
    }

}

export {addEmployee, getEmployees, getEmployee, updateEmployee, upload};