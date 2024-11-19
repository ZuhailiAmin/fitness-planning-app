import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const registerUser = (userData) => API.post('/api/users/register', userData);
export const loginUser = (userData) => API.post('/api/users/login', userData);
