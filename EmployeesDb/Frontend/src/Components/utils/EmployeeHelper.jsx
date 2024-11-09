import axios from "axios";
import { useNavigate } from "react-router-dom";

export const columns = [
    {
        name: "No",
        selector: (row) => row.no,
        width: "70px"
    },
    {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        width: "100px"

    },

    {
      name: "Image",
      selector: (row) => row.profileImage,
      width: "90px"

  },

    {
        name: "Department",
        selector: (row) => row.dep_name,
        width: "120px"
    },
    {
      name: "Branch",
      selector: (row) => row.dep_name,
      width: "120px"
  },
    {
        name: "Action ",
        selector: (row) => row.action,
        center: true
    },
];


export const fetchDepartments = async () => {
    let departments
        
        try {
          const responnse =  await axios.get(
            'http://localhost:3000/api/department',
            
             {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
          if(responnse.data.success) {
            departments = responnse.data.departments
          }
         } catch(error) {
          if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
         }
      } 
      return departments
    }; 

    export const fetchBranches = async () => {
      let branches
          
          try {
            const responnse =  await axios.get(
              'http://localhost:3000/api/branch',
              
               {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            })
            if(responnse.data.success) {
              branches = responnse.data.branches
            }
           } catch(error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
           }
        } 
        return branches
      }; 

    // eslint-disable-next-line react/prop-types
    export const EmployeeBtn = ({Id}) => {
        const navigate = useNavigate();
    
       
        return(
            <div className="flex space-x-3">
                <button className="px-3 py-1 bg-maryBlue text-white"
                onClick={() => navigate(`/hr_dashboard/employees/${Id}`)}
                >View
                </button>

                <button className="px-3 py-1 bg-green-600 text-white"
                onClick={() => navigate(`/hr_dashboard/employees/edit/${Id}`)}
                >Edit
                </button>
                
                
                <button className="px-3 py-1 bg-red-600 text-white"
                onClick={() => (Id)}
                >Leave
                </button>
            </div>
        )
    }
