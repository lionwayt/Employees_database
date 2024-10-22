// import React from 'react';

// const Card = ({ title, value, icon }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center space-y-2">
//       {/* Icon */}
//       <div className="text-4xl text-blue-500">
//         {icon}
//       </div>

//       {/* Value */}
//       <p className="text-2xl font-semibold text-gray-800">
//         {value}
//       </p>

//       {/* Title */}
//       <p className="text-sm text-gray-600">
//         {title}
//       </p>
//     </div>
//   );
// };

// export default Card;
import React from 'react';

const Card = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition-shadow duration-300">
      {/* Icon */}
      <div className="text-5xl text-maryBlue">
        {icon}
      </div>

      {/* Value */}
      <p className="text-3xl font-semibold text-gray-800">
        {value}
      </p>

      {/* Title */}
      <p className="text-sm text-gray-600 text-center">
        {title}
      </p>
    </div>
  );
};

export default Card;
