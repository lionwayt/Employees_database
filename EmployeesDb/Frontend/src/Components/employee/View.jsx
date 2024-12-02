import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  const {id} = useParams()
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const responnse = await axios.get(
          `http://localhost:3000/api/employee/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
   
        if (responnse.data.success) {
          setEmployee(responnse.data.employee);
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    };
    fetchEmployee();
  }, []);

  return (
    <>
      {employee ? (
        <div className="max-w-3x1 mx-auto mx-10 bg-white p-8 rounded-md text-center shadow-md">
          <div className="mt-8" >
          <h3 className="text-2xl font-bold mb-4 text-maryBlue">
            Employee Details
          </h3>
          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-maryOrange">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <img
                src={`http://localhost:3000/${employee.userId.profileImage}`}
                alt=""
                className="rounded-full border w-72"
              />
            </div>

            <div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{employee.userId.name}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Employee ID:</p>
                <p className="font-medium">{employee.employeeId}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Department:</p>
                <p className="font-medium">{employee.department.dep_name}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Branch:</p>
                <p className="font-medium">{employee.branch.branch_name}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Date of Birth:</p>
                <p className="font-medium">
                  {new Date(employee.dob).toLocaleDateString()}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Address:</p>
                <p className="font-medium">{employee.address}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Phone:</p>
                <p className="font-medium">{employee.phone}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Email:</p>
                <p className="font-medium">{employee.userId.email}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Start Date:</p>
                <p className="font-medium">{employee.startDate}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Employment Type:</p>
                <p className="font-medium">{employee.userId.employmentType}</p>
              </div>

              <div className="flex space-x-3 mb-5">
              <p className="text-lg font-bold text-maryBlue">
                  Emergency Contact Information <br />
                </p>
                </div>
              <div className="flex space-x-3 mb-5">

                
                <p className="text-lg font-bold">Name:</p>
                <p className="font-medium">{employee.emergencyContactName}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Relationship:</p>
                <p className="font-medium">
                  {employee.emergencyContactRelationship}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Phone Number:</p>
                <p className="font-medium">{employee.emergencyContactPhone}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Address:</p>
                <p className="font-medium">
                  {employee.emergencyContactAddress}
                </p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Bank Name:</p>
                <p className="font-medium">{employee.bankName}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Account Name:</p>
                <p className="font-medium">{employee.accountName}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Account Number:</p>
                <p className="font-medium">{employee.accountNumber}</p>
              </div>
              <div className="flex space-x-3 mb-5">
                <p className="text-lg font-bold">Salary:</p>
                <p className="font-medium">{employee.salary}</p>
              </div>
            </div>
          </div>
         
          </div>
          </div>
        </div>
      ) : (
        <div> Loading ...</div>
      )}
    </>
  );
};

export default View;
