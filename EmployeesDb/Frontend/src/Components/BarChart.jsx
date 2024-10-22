// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const MyBarChart = () => {
//   const data = [
//     { department: 'HR', employees: 40 },
//     { department: 'Engineering', employees: 60 },
//     { department: 'Sales', employees: 30 },
//     { department: 'Marketing', employees: 20 }
//   ];

//   return (
//     <BarChart width={500} height={300} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="department" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="employees" fill="#8884d8" />
//     </BarChart>
//   );
// };

// export default MyBarChart;
// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const MyBarChart = () => {
//   const data = [
//     { department: 'HR', employees: 40 },
//     { department: 'Engineering', employees: 60 },
//     { department: 'Sales', employees: 30 },
//     { department: 'Marketing', employees: 20 }
//   ];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
//       <h3 className="text-center font-semibold text-lg">Leave Usage by Department</h3>

//       <BarChart width={300} height={200} data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="department" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="employees" fill="#8884d8" />
//       </BarChart>

//     </div>
//   );
// };

// export default MyBarChart;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MyBarChart = () => {
  const data = [
    { department: "HR", employees: 40 },
    { department: "Engineering", employees: 60 },
    { department: "Sales", employees: 30 },
    { department: "Marketing", employees: 20 },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h3 className="text-center font-semibold text-lg">
        Employee Count by Department
      </h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="employees" fill="#4CAF50" />{" "}
          {/* Updated color to Green */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
