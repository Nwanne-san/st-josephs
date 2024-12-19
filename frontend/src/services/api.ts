import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Ensure this runs only on the client side
if (typeof window !== "undefined") {
  const token: string | undefined = Cookies.get("token");

  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("Token found and set in headers:", token);
  } else {
    console.error("No token found in localStorage.");
  }
}
export default api;


export const signupAdmin = (credentials: string) => API.post('/auth/signup', credentials);
export const loginAdmin = (credentials: string) => API.post('/auth/login', credentials);
export const fetchPatients = () => API.get('/patients');
export const addPatient = (patient: unknown) => API.post('/patients', patient);
export const updatePatient = (id: string, patient: string) => API.put(`/patients/${id}`, patient);
export const deletePatient = (id: string) => API.delete(`/patients/${id}`);
