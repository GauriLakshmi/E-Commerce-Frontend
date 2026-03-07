import axios from "axios";

// Base URL of your backend
const BASE_URL = "http://localhost:5000/api"; // change this if deployed

const API = axios.create({
  baseURL: BASE_URL,
});

// Optional: attach token automatically for protected routes
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;