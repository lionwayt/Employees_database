import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import branchRouter from './routes/branch.js'
import leaveRouter from './routes/leave.js'
import settingRouter from './routes/setting.js'
import dashboardRouter from './routes/dashboard.js'
import coordinatorRouter from './routes/coordinator.js'
import projectRouter from './routes/project.js'
import connectToDatabase from './db/db.js'

connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))
app.use('/api/auth', authRouter)
app.use('/api/department', departmentRouter)
app.use('/api/employee', employeeRouter)
app.use('/api/branch', branchRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/dashboard', dashboardRouter)
app.use('/api/coordinator', coordinatorRouter)
app.use('/api/project', projectRouter)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
})