import React from 'react'
import { useAuth } from '../Context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBasedRoute = ({children, requiredRole}) => {
    const {user, loading} = useAuth()

    if(loading){
     return   <div>Loading ...</div>
    }

    if(!requiredRole.includes(user.role)){
        <Navigate to="/unauthorized" />
    }
    return user ? children : <Navigate to="/login" />
}


export default RoleBasedRoute
