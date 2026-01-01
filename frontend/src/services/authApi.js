import axios from "axios";

const loginUser = (credentials) => {
  return axios.post(
    "http://localhost:5000/student/login",
    credentials
  );
};

export default loginUser;