// /src/services/apiService.js
import axiosInstance from './axiosInstance';

// Function to get all employees
export const getEmployees = async () => {
  try {
    const response = await axiosInstance.get('/employees');
    return response.data; // Assuming the data is in response.data
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

// Function to create a new employee
export const createEmployee = async (employeeData) => {
  try {
    const response = await axiosInstance.post('/employees', employeeData);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

// Function to get employee details by ID
export const getEmployeeById = async (id) => {
  try {
    const response = await axiosInstance.get(`/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employee:', error);
    throw error;
  }
};

// Add more API functions as necessary...
