import axios from "axios";

const API = axios.create({
  baseURL: "https://e-commerce-backend-78el.onrender.com/api",
});

export default API;