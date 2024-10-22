import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns, DepartmentBtn } from "../utils/DepartmentHelper";
import { Link } from "react-router-dom";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [depLoading, setDepLoading] = useState(false);
  const [filteredDepartments, setFilterDepartments] = useState([]);

  const onDepartmentDelete = async (id) => {
    const data = departments.filter((dep) => dep._id !== id);
    setDepartments(data);
  };

  useEffect(() => {
    const fetchDepartment = async () => {
      setDepLoading(true);
      try {
        const responnse = await axios.get(
          "http://localhost:3000/api/department",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (responnse.data.success) {
          let no = 1;
          console.log(responnse.data);
          const data = await responnse.data.departments.map((dep) => ({
            _id: dep._id,
            no: no++,
            dep_name: dep.dep_name,
            action: (
              <DepartmentBtn
                Id={dep._id}
                onDepartmentDelete={onDepartmentDelete}
              />
            ),
          }));
          setDepartments(data);
          setFilterDepartments(data);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setDepLoading(false);
      }
    };
    fetchDepartment();
  }, [onDepartmentDelete]);

  const filterDepartments = (e) => {
    const records = departments.filter((dep) =>
      dep.dep_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterDepartments(records);
  };

  return (
    <>
      {depLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-6 text-maryBlue">
              {" "}
              Manage Departments
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Dep Name"
              className="px-4 py-0.5 border"
              onChange={filterDepartments}
            />
            <Link
              to="/hr_dashboard/add-department"
              className="px-4 py-1 bg-maryBlue rounded text-white"
            >
              Add New Department
            </Link>
          </div>

          {/* Department Table */}
          <div className="mt-5">
            <DataTable
              columns={columns}
              data={filteredDepartments}
              pagination
            />
          </div>
        </div>
      )}
    </>
  );
};
export default DepartmentList;
