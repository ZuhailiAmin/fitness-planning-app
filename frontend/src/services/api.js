import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001",
});

// Register User
export const registerUser = async (userData) => {
  return await API.post("/api/users/register", userData);
};

// Login User
export const loginUser = async (userData) => {
  return await API.post("/api/users/login", userData);
};
