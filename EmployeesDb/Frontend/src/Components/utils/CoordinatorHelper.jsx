import axios from "axios"
import { useNavigate } from "react-router-dom"



export const columns = [
    {
        name: "No",
        selector: (row) => row.no,
    },
    {
        name: "Coordinator Name",
        selector: (row) => row.co_name,
        sortable: true
    },
    {
        name: "Action ",
        selector: (row) => row.action,
    },
];


export const CoordinatorBtn = ({Id, onCoordinatorDelete}) => {
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const confirm = window.confirm("Do you want to delete?");
        if (confirm) {
        try {
           
            const responnse =  await axios.delete(
                `http://localhost:3000/api/coordinator/${id}`,
                 {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
        });
           
            if(responnse.data.success) {
                onCoordinatorDelete();
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
            onClick={() => navigate(`/hr_dashboard/coordinator/${Id}`)}
            >Edit</button>
            <button className="px-3 py-1 bg-red-600 text-white"
            onClick={() => handleDelete(Id)}
            >Delete</button>
        </div>
    )
}

