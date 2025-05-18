import axios from "axios";

// change your these varibale to your apiUrl
const apiUrl = "";

const axiosInstance = axios.create(
  {
    baseURL: apiUrl,
    withCredentials: true,
  },
);

export default axiosInstance;
