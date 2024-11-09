import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



const View = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState(null);
   
    useEffect(() => {
        const fetchEmployee = async () => {
       
          try {
            const responnse =  await axios.get(
              `https://mjemployeemanagment.onrender.com/api/employee/${id}`,
               {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
            });
         
            if (responnse.data.success) {
                setEmployee(responnse.data.employee);
            }
           } catch(error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
           }
           }}
      fetchEmployee();
     }, []); 

  return (
    <>{employee ? (
    <div className="max-w-3x1 mx-auto mx-10 bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2x1 font-bold mb-8 text-center">Employee Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
                   <img src={`https://mjemployeemanagment.onrender.com/${employee.userId.profileImage}`} alt=""
                        className="rounded-full border w-72" 
                        />
                </div>

                <div>
                <div className="flex space-x-3 mb-5">
                    <p className="text-lg font-bold">Name:</p>
                    <p className="font-medium">{employee.userId.name}</p>

                </div>
          
                </div>
        </div>
     
    </div>
    ): <div> Loading ....</div> }</>
  )
}

export default View
