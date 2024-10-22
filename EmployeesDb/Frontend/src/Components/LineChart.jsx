// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const MyLineChart = () => {
//   const data = [
//     { month: 'January', value: 40 },
//     { month: 'February', value: 50 },
//     { month: 'March', value: 60 },
//     { month: 'April', value: 70 },
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
//       <h3 className="text-center font-semibold text-lg">Attendance Over Time</h3>
//       <LineChart width={300} height={200} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="value" stroke="#8884d8" />
//       </LineChart>
//     </div>
//   );
// };

// export default MyLineChart;
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyLineChart = () => {
  const data = [
    { month: 'January', value: 40 },
    { month: 'February', value: 50 },
    { month: 'March', value: 60 },
    { month: 'April', value: 70 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h3 className="text-center font-semibold text-lg">Attendance Over Time</h3>
      
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} /> {/* Updated color to Green */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyLineChart;
