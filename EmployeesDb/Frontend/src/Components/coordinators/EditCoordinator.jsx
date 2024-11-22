
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {CoordinatorBtn } from "../utils/CoordinatorHelper.jsx";

const EditCoordinator = () => {
    const {id} = useParams()
    const [coordinator, setCoordinator] = useState([])
    const [coLoading, setCoLoading] = useState(false)
    const navigate = useNavigate();

  

    useEffect(() => {
        const fetchCoordinators = async () => {
          setCoLoading(true)
          try {
            const responnse =  await axios.get(
              `https://mjemployeemanagment.onrender.com/api/coordinator/${id}`,
               {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              },
            });
          
            if(responnse.data.success) {
              let no= 1;
              console.log(responnse.data)
             const data = await responnse.data.coordinators.map((co)=> (
              {
                _id: co._id,
                no: no++,
                co_name: co.co_name,
                action: <CoordinatorBtn Id={co._id} />,
              }));
              setCoordinator(data)
            }
           } catch(error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
           }
        } finally {
            setCoLoading(false)
        }
      };
      fetchCoordinators();
     }, []); 

     const handleChange = (e) => {
        const { name, value } = e.target;
        setCoLoading({ ...coordinator, [name]: value });
      };

      

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
              `https://mjemployeemanagment.onrender.com/api/coordinator/${id}`,
              coordinator,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            if (response.data.success) {
              navigate("hr_dashboard/coordinators");
            }
          } catch (error) {
            if (error.response && !error.response.data.success) {
              alert(error.response.data.error);
            }
          } 
      };
  
  return (
    <>{coLoading ? <div>Loading ...</div> :
    <div className="container mx-auto px-4 py-8">
    {/* Edit Department Form */}
    <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4 text-maryBlue">
      Edit Coordinator
    </h2>
    <form
      className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange"
      onSubmit={handleSubmit}
    >
      <fieldset className="border border-maryBlue p-4 rounded-md">
        <legend className="text-lg font-medium text-maryOrange">
        Coordinator Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="co_name"
              className="block text-sm font-medium text-gray-700"
            >
              Coordinator Name
            </label>
            <input
              type="text"
              name="co_name"
              placeholder="Coordinator Name"
              value={coordinator.co_name}
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
               Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={coordinator.description}
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
          Edit Coordinator
        </button>
      </div>
    </form>
  </div>
  </div>
  }</>
  )
}

export default EditCoordinator