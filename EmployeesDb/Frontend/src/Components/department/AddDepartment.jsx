
import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {

    const [department, setDepartment] = useState({
        dep_name: "",
        description: "",
      });
      
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDepartment({...department, [name] : value});
    }
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(
         'http://localhost:3000/api/department/add',
          department,
          {
            headers: {
              "Authorization" : `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          navigate("/hr_dashboard/departments");
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };


  return (
    <div className="container mx-auto px-4 py-8">
    {/* Add New Department Form */}
    <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-maryBlue">
      Add New Department
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
          Add Department
        </button>
      </div>
    </form>
  </div>
  </div>

  )
}

export default AddDepartment