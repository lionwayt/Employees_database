import React from 'react';

// Sample employee data
const employeeData = {
  id: 1,
  name: 'John Doe',
  jobTitle: 'Software Engineer',
  department: 'IT',
  hireDate: '2021-03-15',
  status: 'Active',
  contact: 'john.doe@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Springfield, USA',
  employmentHistory: [
    {
      company: 'Tech Corp',
      position: 'Junior Developer',
      startDate: '2020-01-01',
      endDate: '2021-03-01',
    },
    {
      company: 'Web Solutions',
      position: 'Intern',
      startDate: '2019-05-01',
      endDate: '2019-12-01',
    },
  ],
};

const EmployeeDetails = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <strong>ID:</strong> {employeeData.id}
          </div>
          <div>
            <strong>Name:</strong> {employeeData.name}
          </div>
          <div>
            <strong>Job Title:</strong> {employeeData.jobTitle}
          </div>
          <div>
            <strong>Department:</strong> {employeeData.department}
          </div>
          <div>
            <strong>Hire Date:</strong> {employeeData.hireDate}
          </div>
          <div>
            <strong>Status:</strong> {employeeData.status}
          </div>
          <div>
            <strong>Contact:</strong> {employeeData.contact}
          </div>
          <div>
            <strong>Phone:</strong> {employeeData.phone}
          </div>
          <div>
            <strong>Address:</strong> {employeeData.address}
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Employment History</h3>
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Company</th>
              <th className="px-4 py-2 border-b">Position</th>
              <th className="px-4 py-2 border-b">Start Date</th>
              <th className="px-4 py-2 border-b">End Date</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.employmentHistory.map((job, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{job.company}</td>
                <td className="px-4 py-2 border-b">{job.position}</td>
                <td className="px-4 py-2 border-b">{job.startDate}</td>
                <td className="px-4 py-2 border-b">{job.endDate || 'Present'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetails;
