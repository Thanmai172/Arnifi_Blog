// src/api.js
import axios from 'axios';

// Define API instance
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // 👈 or use your backend URL
});

// Add token to every request if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
