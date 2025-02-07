
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {BranchBtn } from "../utils/BranchHelper.jsx";

const EditBranch = () => {
    const {id} = useParams()
    const [branch, setBranch] = useState([])
    const [braLoading, setBraLoading] = useState(false)
    const navigate = useNavigate();

  

    useEffect(() => {
        const fetchBranches = async () => {
            setBraLoading(true)
          try {
            const responnse =  await axios.get(
              `http://localhost:3000/api/branch/${id}`,
               {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
            });
          
            if(responnse.data.success) {
              let no= 1;
              console.log(responnse.data)
             const data = await responnse.data.departments.map((bra)=> (
              {
                _id: bra._id,
                no: no++,
                branch_name: bra.branch_name,
                action: <BranchBtn Id={bra._id} />,
              }));
             setBranch(data)
            }
           } catch(error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
           }
        } finally {
          setBraLoading(false)
        }
      };
      fetchBranches();
     }, []); 

     const handleChange = (e) => {
        const { name, value } = e.target;
        setBranch({ ...branch, [name]: value });
      };

      

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
              `http://localhost:3000/api/branch/${id}`,
              branch,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            if (response.data.success) {
              navigate("hr_dashboard/branches");
            }
          } catch (error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
            }
          } 
      };
  
  return (
    <>{braLoading ? <div>Loading ...</div> :
    <div className="container mx-auto px-4 py-8">
    {/* Edit Branch Form */}
    <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-maryBlue">
      Edit Branch
    </h2>
    <form
      className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
      onSubmit={handleSubmit}
    >
      <fieldset className="border border-maryBlue p-4 rounded-md">
        <legend className="text-lg font-medium text-maryOrange">
          Branch Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="branch_name"
              className="block text-sm font-medium text-gray-700"
            >
              Branch Name
            </label>
            <input
              type="text"
              name="bra_name"
              placeholder="Branch Name"
              value={branch.bra_name}
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
              Branch Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={branch.description}
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
          Edit Branch
        </button>
      </div>
    </form>
  </div>
  </div>
  }</>
  )
}

export default EditBranch;