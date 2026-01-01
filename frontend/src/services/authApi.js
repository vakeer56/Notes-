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

export const registerStudent = (credentials) => {
  return axios.post(
    "http://localhost:5000/student/register",
    credentials
  )
}
export const uploadNotes = (token, formData) => {
  return axios.post(
    "http://localhost:5000/notes/upload",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
};
