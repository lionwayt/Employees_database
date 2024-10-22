
import { FaUser, FaSyncAlt, FaUsers, FaUserAltSlash } from "react-icons/fa";
import Card from "../components/card";
import MyPie from "../components/chart";
import MyLineChart from "../components/LineChart";
import MyBarChart from "../components/BarChart";
import EmployeeTable from "../components/EmployeeTable";
import AttendanceRecords from "../components/AttendanceRecords";

export default function Dashboard() {
  const demographicData = [
    { name: "Male", value: 300 },
    { name: "Female", value: 200 },
    { name: "Other", value: 50 },
  ];

  const attendanceData = [
    { month: "January", attendance: 80 },
    { month: "February", attendance: 75 },
    { month: "March", attendance: 90 },
    { month: "April", attendance: 85 },
  ];

  const leaveData = [
    { department: "HR", leaves: 10 },
    { department: "Engineering", leaves: 5 },
    { department: "Sales", leaves: 3 },
    { department: "Marketing", leaves: 7 },
  ];

  return (
    <div className="space-y-8">
      {/* Top Section - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <Card
          title="Total Employees"
          value="500"
          icon={<FaUsers />}
          style={{ backgroundColor: "#1D4E89", color: "white" }}
        />
        <Card
          title="Turnover Rate"
          value="12%"
          icon={<FaSyncAlt />}
          style={{ backgroundColor: "#FF6F20", color: "white" }}
        />
        <Card
          title="Active Employees"
          value="480"
          icon={<FaUser />}
          style={{ backgroundColor: "#1D4E89", color: "white" }}
        />
        <Card
          title="On Leave"
          value="20"
          icon={<FaUserAltSlash />}
          style={{ backgroundColor: "#FF6F20", color: "white" }}
        />
      </div>

      {/* Middle Section - Graphs */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {/* Pie Chart */}
        <div className="flex-1 mt-3 w-full">
          <MyPie data={demographicData} />
        </div>

        {/* Line Chart */}
        <div className="flex-1 w-full mt-3">
          <MyLineChart data={attendanceData} />
        </div>

        {/* Bar Chart */}
        <div className="flex-1 w-full mt-3">
          <MyBarChart data={leaveData} className="h-64 w-full" />
        </div>
      </div>

      {/* Employee and Attendance Records */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <EmployeeTable />
        <AttendanceRecords />
      </div>
    </div>
  );
}
