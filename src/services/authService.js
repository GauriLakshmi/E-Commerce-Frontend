// src/services/authService.js
import API from "../api/api";

const authService = {
  signup: async (userData) => {
    const res = await API.post("/auth/signup", userData);
    return res.data;
  },
  login: async (userData) => {
    const res = await API.post("/auth/login", userData);
    return res.data;
  },
  getProfile: async () => {
    const res = await API.get("/auth/profile");
    return res.data;
  },
};

export default authService; // default export