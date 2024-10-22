// /src/services/axiosInstance.js
import axios from 'axios';

// Create an Axios instance with base URL and other configurations
const axiosInstance = axios.create({
  baseURL: import.meta.env.MONGODB_URL || 'http://localhost:3000', // Use environment variable or default to local API
  timeout: 10000, // Optional timeout for requests (10 seconds)
  headers: {
    'Content-Type': 'application/json', // Default header for all requests
  },
});

// Add an interceptor to handle request authorization or logging if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent, e.g., add a token if needed
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an interceptor to handle responses globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors, like unauthorized access or timeouts
    if (error.response?.status === 401) {
      // Redirect to login or handle unauthorized access
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
