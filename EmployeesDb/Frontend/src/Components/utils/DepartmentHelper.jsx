import axios from "axios"
import { useNavigate } from "react-router-dom"



export const columns = [
    {
        name: "No",
        selector: (row) => row.no,
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name,
        sortable: true
    },
    {
        name: "Action ",
        selector: (row) => row.action,
    },
];


export const DepartmentBtn = ({Id, onDepartmentDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const confirm = window.confirm("Do you want to delete?");
        if (confirm) {
        try {
           
            const responnse =  await axios.delete(
                `https://mjemployeemanagment.onrender.com/department/${id}`,
                 {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        });
           
            if(responnse.data.success) {
                onDepartmentDelete();
            }
           } catch(error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
           }
        }
    }
    }
    
    return(
        <div className="flex space-x-3">
            <button className="px-3 py-1 bg-maryBlue text-white"
            onClick={() => navigate(`/hr_dashboard/department/${Id}`)}
            >Edit</button>
            <button className="px-3 py-1 bg-red-600 text-white"
            onClick={() => handleDelete(Id)}
            >Delete</button>
        </div>
    )
}

