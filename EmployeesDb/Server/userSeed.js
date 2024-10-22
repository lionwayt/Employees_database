import User from './models/User.js'
import bcrypt from 'bcrypt'
import connectToDatabase from './db/db.js'

const userRegister = async () => {
    connectToDatabase()
    try {
        const hashPassword = await bcrypt.hash("hr", 10)
        const newUser = new User({
            name: "Hr",
            email: "hr@gmail.com",
            password: hashPassword,
            role: "hr"
        })
        await newUser.save()

    }catch(error) {
        console.log(error)
    }
}
userRegister();