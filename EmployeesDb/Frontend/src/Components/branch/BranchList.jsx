import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, BranchBtn } from "../utils/BranchHelper.jsx";
import { Link } from "react-router-dom";

const BranchList = () => {
  const [branches, setBranches] = useState([]);
  const [braLoading, setBraLoading] = useState(false);
  const [filteredBranches, setFilterBranches] = useState([]);

  const onBranchesDelete = async (id) => {
    const data = branches.filter(bra => bra._id !== id);
         setBranches(data);
  }

 
  useEffect(() => {
    const fetchBranches = async () => {
        setBraLoading(true);
        try {
          const responnse = await axios.get(
            "https://mjemployeemanagment.onrender.com/branch",
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (responnse.data.success) {
            let no = 1;
         
           
            const data = await responnse.data.branches.map((bra) => (
              {
              _id: bra._id,
              no: no++,
              branch_name: bra.branch_name,
              action: (
                <BranchBtn
                  Id={bra._id}
                  onBranchesDelete={onBranchesDelete}/> ),
            }));
            setBranches(data);
            setFilterBranches(data);
          }
        } catch (error) {
          if (error.response && !error.response.data.success) {
            alert(error.response.data.error)
          }
        } finally {
          setBraLoading(false);
        }
      };
    fetchBranches();
  }, []);

  const filterBranches = (e) => {
    const records = branches.filter((bra) =>
      bra.branch_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterBranches(records);
  };

  return (
    <>
      {braLoading ? 
        <div>Loading ...</div>
       : 
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-maryBlue">
              Manage Branches
            </h3>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Branch Name"
              className="px-4 py-0.5 border"
              onChange={filterBranches}
            />
            <Link
              to="/hr_dashboard/add-branches"
              className="px-4 py-1 bg-maryBlue rounded text-white">
              Add New Branches
            </Link>
          </div>
          
          <div className="mt-5">
            <DataTable
              columns={columns}
              data={filteredBranches}
              pagination
            />
          </div>
        </div>
      }</>
  );
};
export default BranchList;
