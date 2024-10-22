// import React from 'react';
// import { PieChart, Pie, Tooltip, Cell } from 'recharts';

// const MyPieChart = () => {
//   const data = [
//     { name: 'Male', value: 300 },
//     { name: 'Female', value: 200 },
//     { name: 'Other', value: 50 },
//   ];

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

//   return (
//     <div className="w-full md:w-1/2">
//       <h3 className="text-center">Employee Demographics</h3>
//       <PieChart width={400} height={400}>
//         <Pie
//           data={data}
//           cx={200}
//           cy={200}
//           innerRadius={60}
//           outerRadius={120}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   );
// };

// export default MyPieChart;
// import React from 'react';
// import { PieChart, Pie, Tooltip, Cell } from 'recharts';

// const MyPieChart = () => {
//   const data = [
//     { name: 'Male', value: 300 },
//     { name: 'Female', value: 200 },
//     { name: 'Other', value: 50 },
//   ];

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
//       <h3 className="text-center font-semibold text-lg">Employee Demographics</h3>
//       <PieChart width={300} height={200}>
//         <Pie className='flex items-center'
//           data={data}
//           cx={180} // Centering the pie chart
//           cy={95}
//           innerRadius={60}
//           outerRadius={100} // Adjusted for a better fit
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   );
// };

// export default MyPieChart;
import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const MyPieChart = () => {
  const data = [
    { name: 'Male', value: 300 },
    { name: 'Female', value: 200 },
    { name: 'Other', value: 50 },
  ];

  // Updated color palette for attractiveness
  const COLORS = ['#4CAF50', '#2196F3', '#FF5722']; // Green, Blue, and Orange

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h3 className="text-center font-semibold text-lg">Employee Demographics</h3>
      <PieChart width={300} height={200}>
        <Pie
          data={data}
          cx={150} // Centering the pie chart
          cy={100}
          innerRadius={60}
          outerRadius={80} // Adjusted for a better fit
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
