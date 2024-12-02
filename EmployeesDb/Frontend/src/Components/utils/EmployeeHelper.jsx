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
        name: "Department",
        selector: (row) => row.dep_name,
      
        width: "120px"
    },

    {
      name: "Branch",
      selector: (row) => row.branch,
      
      width: "120px"
  },

  {
    name: "Email",
    selector: (row) => row.email,
    width: "180px"
},
{
  name: "Phone",
  selector: (row) => row.phone,

  width: "120px"
},
    {
        name: "Action ",
        selector: (row) => row.action,
        center: true
    }
];


export const fetchDepartments = async () => {

    let departments
        
        try {
          const responnse =  await axios.get(
            'https://mjemployeemanagment.onrender.com/api/department',
            
             {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
          }
        )
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

      export const getEmployees = async (id) => {
        let employees;
        try {
          const responnse = await axios.get(
            `http://localhost:3000/api/employee/department/${id}`,
             {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },

          }
        );
        console.log(responnse)
          if (responnse.data.success){
            employees = responnse.data.employees;
          }
        } catch (error) {
          if (error.response && !error.response.data.success) {
            alert(error.response.data.error);
          }
        }
        return employees;
      }

    // eslint-disable-next-line react/prop-types
    export const EmployeeBtn = ({ Id }) => {
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
                onClick={() => navigate(`/hr_dashboard/employees/leaves/${Id}`)}
                >Leave
                </button>
            </div>
        )
    }
