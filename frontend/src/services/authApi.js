import axios from "axios";

export const loginUser = (credentials) => {
  return axios.post(
    "http://localhost:5000/student/login",
    credentials
  );
};

export const loginAdmin = (credentials) => {
  return axios.post(
    "http://localhost:5000/admin/login",
    credentials
  );
};