import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, CoordinatorBtn } from "../utils/CoordinatorHelper.jsx";
import { Link } from "react-router-dom";

const ListCoordinator = () => {
  const [coordinators, setCoordinators] = useState([]);
  const [coLoading, setCoLoading] = useState(false);
  const [filteredCoordinators, setFilterCoordinators] = useState([]);

  const onCoordinatorDelete = () => {
    fetchCoordinators()
  }

  const fetchCoordinators = async () => {
    setCoLoading(true);
    try {
      const responnse = await axios.get(
        "https://mjemployeemanagment.onrender.com/api/coordinator",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (responnse.data.success) {
        let no = 1;
     
       
        const data = await responnse.data.coordinators.map((co) => (
          {
          _id: co._id,
          no: no++,
          co_name: co.co_name,
          action: (
            <CoordinatorBtn
              Id={co._id}
              onCoordinatorDelete={onCoordinatorDelete}
              /> ),
        }));
        setCoordinators(data);
        setFilterCoordinators(data);
      }
    } catch (error) {
      if (error.response && !error.response.data.success) {
        alert(error.response.data.error)
      }
    } finally {
      setCoLoading(false);
    }
  };
  useEffect(() => {
    
    fetchCoordinators();
  }, []);

  const filterCoordinators = (e) => {
    const records = coordinators.filter((co) =>
      co.co_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterCoordinators(records);
  };

  return (
    <>
      {coLoading ? 
        <div>Loading ...</div>
       : 
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-maryBlue">
              Manage Coordinators
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Dep Name"
              className="px-4 py-0.5 border"
              onChange={filterCoordinators}
            />
            <Link
              to="/hr_dashboard/add-coordinator"
              className="px-4 py-1 bg-maryBlue rounded text-white">
              Add New Coordinators
            </Link>
          </div>
          
          <div className="mt-5">
            <DataTable
              columns={columns}
              data={filteredCoordinators}
              pagination
            />
          </div>
        </div>
      }</>
  );
};

export default ListCoordinator;
