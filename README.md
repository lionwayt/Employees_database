# HR Dashboard for Employee Management System

## Overview
The HR Dashboard is a comprehensive web-based application designed to streamline the management of employees, projects, and departments. It simplifies operations such as CRUD functionalities, leave management, project tracking, and department organization, making it an essential tool for modern organizations.

## Features
- **CRUD Operations:**
  - Add, update, delete, and view employee data.
- **Leave Management:**
  - Apply, approve, and track leave requests.
- **Project Management:**
  - Assign and monitor project statuses.
- **Department Management:**
  - Organize and manage departmental hierarchies.

## Technologies Used
- **Frontend:** Vite + React.js
- **Backend:** Node.js 
- **Database:** MongoDB
- **Other Tools:**GitHub, RESTful APIs

## Installation
### Prerequisites
- Node.js 14+
- MongoDB


### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/lionwayt/employeeDb.git
   cd EmployeesDb
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   npm run start
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Ensure MongoDB is running locally or configure the connection string in the `.env` file.

5. Access the application at `http://localhost:5173`.

## Usage
1. Log in with your credentials.
2. Navigate through the dashboard to manage employees, projects, and departments.
3. Approve or reject leave requests from the Leave Management tab.
4. Assign employees to projects and track their progress.

## Project Structure
```
EmployeesDb/
├── backend/            # Node.js backend
├── frontend/           # Vite + React frontend
└── README.md           # Project documentation
```

## Challenges and Solutions
- **Integration Issues:** Faced difficulties in syncing frontend and backend APIs. Resolved by standardizing API contracts.
- **Database Optimization:** Optimized queries to improve performance during heavy data loads.

## Future Enhancements
- Add analytics dashboard for KPIs.
- Integrate with third-party payroll systems.
- Build a mobile-friendly version.



## Contributor
- [Hiwot Molalign](https://github.com/lionwayt/employeeDb.git) - Developer


## Contact
For any queries, please reach out to:
- **Email:** hiwotmolalign2@gmail.com
- **GitHub:** [GitHub Repository]([https://github.com/lionwayt.git])
