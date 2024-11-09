
import { FaSyncAlt, FaUser, FaUserAltSlash, FaUsers } from 'react-icons/fa'
import Card from '../card';
import MyPie from '../chart';
import MyLineChart from '../LineChart';
import MyBarChart from '../BarChart';



const HrSummary = () => {


  const demographicData = [
    { name: 'Male', value: 300 },
    { name: 'Female', value: 200 },
    { name: 'Other', value: 50 },
  ];

  const attendanceData = [
    { month: 'January', attendance: 80 },
    { month: 'February', attendance: 75 },
    { month: 'March', attendance: 90 },
    { month: 'April', attendance: 85 },
  ];

  const leaveData = [
    { department: 'HR', leaves: 10 },
    { department: 'Engineering', leaves: 5 },
    { department: 'Sales', leaves: 3 },
    { department: 'Marketing', leaves: 7 },
  ]; 
  return (
    <div className=' p-10'>
        <h1 className='text-2x1 font-bold'>Dashboard Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <Card title="Total Employees" value="500" icon={<FaUsers />} style={{ backgroundColor: '#1D4E89', color: 'white' }} />
        <Card title="Turnover Rate" value="12%" icon={<FaSyncAlt />} style={{ backgroundColor: '#FF6F20', color: 'white' }} />
        <Card title="Active Employees" value="480" icon={<FaUser />} style={{ backgroundColor: '#1D4E89', color: 'white' }} />
        <Card title="On Leave" value="20" icon={<FaUserAltSlash />} style={{ backgroundColor: '#FF6F20', color: 'white' }} />
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
    </div>
   
  )
}

export default HrSummary