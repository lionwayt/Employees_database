import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Pages/Login";
import HrDashboard from "./Components/Pages/HrDashboard";
import EmployeesDashboard from "./Components/Pages/EmployeesDashboard";
import HrSummary from "./Components/Dashboard/HrSummary";
import Summary from "./Components/EmployeeDashboard/Summary";
import Create from "./Components/Leave/Create";
import ProjectCoordinator from "./Components/Pages/ProjectCoordinator";
import ExecutiveDirector from "./Components/Pages/ExecutiveDirector";
import PrivateRoute from "./Components/utils/PrivateRoute";
import RoleBasedRoute from "./Components/utils/RoleBasedRoute";
import Add from "./Components/employee/Add.jsx";
import AddDepartment from "./Components/department/AddDepartment.jsx";
import EditDepartment from "./Components/department/EditDepartment.jsx";
import DepartmentList from "./Components/department/DepartmentList.jsx";
import BranchList from "./Components/branch/branchList.jsx";
import AddBranch from "./Components/branch/addBranch.jsx";
import EditBranch from "./Components/branch/editBranch.jsx";
import List from "./Components/employee/List.jsx";
import Edit from "./Components/employee/Edit.jsx";
import LeaveList from "./Components/Leave/LeaveList.jsx";
import View from "./Components/employee/View.jsx";
import Setting from "../src/Components/EmployeeDashboard/Setting.jsx";
import HrSetting from "./Components/Dashboard/HrSetting.jsx";
import AddProject from './Components/projects/AddProject.jsx'
import EditProject from "./Components/projects/EditProject.jsx";
import ProjectList from "./Components/projects/ProjectList.jsx"
import ListCoordinator from "./Components/coordinators/ListCoordinator.jsx";
import AddCoordinator from "./Components/coordinators/AddCoordinator.jsx"
import EditCoordinator from "./Components/coordinators/EditCoordinator.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/hr_dashboard" />}>
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route
          path="/hr_dashboard"
          element={
            <PrivateRoute>
              <RoleBasedRoute requiredRole={["hr"]}>
                <HrDashboard />
              </RoleBasedRoute>
            </PrivateRoute>
          }
        >
          <Route index element={<HrSummary />}></Route>

          <Route path="/hr_dashboard/branches" element={<BranchList />}>
          </Route>
          <Route path="/hr_dashboard/add-branches" element={<AddBranch />}></Route>
          <Route path="/hr_dashboard/branch/:id" element={<EditBranch />}></Route>
          <Route path="/hr_dashboard/departments" element={<DepartmentList />}></Route>
          <Route path="/hr_dashboard/add-department" element={<AddDepartment />}></Route>
          <Route path="/hr_dashboard/department/:id" element={<EditDepartment />}></Route>
          <Route path="/hr_dashboard/employees" element={<List />}></Route>
          <Route path="/hr_dashboard/add-employee" element={<Add />}> </Route>
          <Route path="/hr_dashboard/employees/:id" element={<View />}> </Route>
          <Route path="/hr_dashboard/employees/edit/:id" element={<Edit />}></Route>
          <Route path="/hr_dashboard/leave" element={<LeaveList />}></Route>
          <Route path="/hr_dashboard/setting" element={<HrSetting/>}></Route>

          <Route path="/hr_dashboard/projects"element={<ProjectList />}></Route>
          <Route path="/hr_dashboard/add-project"element={<AddProject />}></Route>
          <Route path="/hr_dashboard/project/edit-project/:id"element={<EditProject />}></Route>

          <Route path="/hr_dashboard/coordinators"element={<ListCoordinator/>}></Route>
          <Route path="/hr_dashboard/add-coordinator"element={<AddCoordinator />}></Route>
          <Route path="/hr_dashboard/coordinator/:id"element={<EditCoordinator />}></Route>
        </Route>

        <Route
          path="/employee_dashboard"
          element={
            <PrivateRoute>
              <RoleBasedRoute requiredRole={["employee"]}>
                <EmployeesDashboard />
              </RoleBasedRoute>
            </PrivateRoute>
          }
        >
          <Route index element={<Summary />}></Route>
          <Route
            path="/employee_dashboard/profile/:id"
            element={<View />}
          ></Route>
          <Route
            path="/employee_dashboard/leave"
            element={<LeaveList />}
          ></Route>
          <Route
            path="/employee_dashboard/add-leave"
            element={<Create />}
          ></Route>
          <Route path="/employee_dashboard/salary" element={<View />}></Route>
          <Route
            path="/employee_dashboard/setting"
            element={<Setting />}
          ></Route>
        </Route>

        <Route path="/project_coordinator" element={<ProjectCoordinator />}>
          
        </Route>
        <Route path="/executive_director" element={<ExecutiveDirector />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
