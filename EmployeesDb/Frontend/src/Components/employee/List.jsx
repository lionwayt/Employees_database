
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, EmployeeBtn } from "../utils/EmployeeHelper.jsx";
import axios from "axios";

const List = () => {
    const [employees, setEmployees] = useState([]);
    const [empLoading, setEmpLoading] = useState(false)
    const [filteredEmployee, setFilteredEmployee] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {

            setEmpLoading(true);
          try {
            const responnse = await axios.get(
              "http://localhost:3000/api/employee",
                {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,                 
                },
              }
            );
            console.log(responnse.data)
            if (responnse.data.success) {

              let no = 1;

              const data = await responnse.data.employees.map((emp) => ({
                
                _id: emp._id,
                no: no++,
                name: emp.userId.name,
                dep_name: emp.department.dep_name,
                email: emp.userId.email,
                phone: emp.phone,
                
                action: ( <EmployeeBtn Id={emp._id} /> ),
              }
            )
          );
              setEmployees(data);
              setFilteredEmployee(data);
            }
          } catch (error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error)
            }
          } finally {
            setEmpLoading(false);
          }
        };
        fetchEmployees();
      }, []);

      const handleFilter = (e) => {
        const records = employees.filter((emp) => (
            emp.name.toLowerCase().includes(e.target.value.toLowerCase())
        ))
        setFilteredEmployee(records);
      }
  return (
    <>
    {empLoading ?
    <div>Loading ...</div>
    :
    <div className="p-5">
      <div className="text-center">
        <h3 className="text-2xl font-bold  text-maryBlue"> 
        Manage Employee
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by Name"
          className="px-4 py-0.5 border"
          onChange={handleFilter}
        />
        <Link
          to="/hr_dashboard/add-employee"
          className="px-4 py-1 bg-maryBlue rounded text-white">
          Add New Employee
        </Link>
      </div>

      <div className="mt-5">
        <DataTable
         columns={columns} 
         data={filteredEmployee} 
         pagination 
         />
      </div>
    </div>
    }</>

  );
};

export default List;
