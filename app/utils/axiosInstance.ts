// src/services/apiService.ts
import axios from "axios";
const isNest = process.env.NEXT_PUBLIC_API_BACKEND === "true";

// Create an instance of Axios
const Axios = axios.create({
  baseURL: isNest
    ? process.env.NEXT_PUBLIC_API_BASE_URL_NEST_DB
    : process.env.NEXT_PUBLIC_API_BASE_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global error responses, e.g., unauthorized, server errors, etc.
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
    }
    return Promise.reject(error);
  }
);

export default Axios;
