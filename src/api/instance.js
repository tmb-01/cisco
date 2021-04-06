import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    authorization: `Bearer ${localStorage.token}`,
  },
});

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default instance;
