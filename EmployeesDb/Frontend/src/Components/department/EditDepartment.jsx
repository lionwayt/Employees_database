
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {DepartmentBtn } from "../utils/DepartmentHelper.jsx";

const EditDepartment = () => {
    const {id} = useParams()
    const [department, setDepartment] = useState([])
    const [depLoading, setDepLoading] = useState(false)
    const navigate = useNavigate();

  

    useEffect(() => {
        const fetchDepartments = async () => {
          setDepLoading(true)
          try {
            const responnse =  await axios.get(
              `https://mjemployeemanagment.onrender.com/department/${id}`,
               {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
            });
          
            if(responnse.data.success) {
              let no= 1;
              console.log(responnse.data)
             const data = await responnse.data.departments.map((dep)=> (
              {
                _id: dep._id,
                no: no++,
                dep_name: dep.dep_name,
                action: <DepartmentBtn Id={dep._id} />,
              }));
             setDepartment(data)
            }
           } catch(error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
           }
        } finally {
          setDepLoading(false)
        }
      };
      fetchDepartments();
     }, []); 

     const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
      };

      

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
              `https://mjemployeemanagment.onrender.com/api/department/${id}`,
              department,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            if (response.data.success) {
              navigate("hr_dashboard/departments");
            }
          } catch (error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
            }
          } 
      };
  
  return (
    <>{depLoading ? <div>Loading ...</div> :
    <div className="container mx-auto px-4 py-8">
    {/* Edit Department Form */}
    <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-maryBlue">
      Edit Department
    </h2>
    <form
      className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
      onSubmit={handleSubmit}
    >
      <fieldset className="border border-maryBlue p-4 rounded-md">
        <legend className="text-lg font-medium text-maryOrange">
          Department Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="dep_name"
              className="block text-sm font-medium text-gray-700"
            >
              Department Name
            </label>
            <input
              type="text"
              name="dep_name"
              placeholder="Department Name"
              value={department.dep_name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Department Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={department.description}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-maryOrange"
              required
            />
          </div>
        </div>
      </fieldset>

      <div className="text-right mt-4">
        <button
          type="submit"
          className="px-6 py-2 bg-maryBlue text-white font-medium text-sm rounded-md hover:bg-maryOrange focus:outline-none focus:bg-maryOrange transition ease-in-out duration-150"
        >
          Edit Department
        </button>
      </div>
    </form>
  </div>
  </div>
  }</>
  )
}

export default EditDepartment;