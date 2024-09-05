import axios from "axios";

const axiosInstance = axios.create();
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhdmlkQG91dGxvb2suY29tIiwiaWF0IjoxNzE1ODA1MTQzLCJleHAiOjE3MTU4MDg3NDN9.hsVhN9KdKhGeKZi7-ti-bAkGPS1vahx-qnCrpWMg0Bg";
// ACT 11 - Get the token from localStorage

axiosInstance.interceptors.request.use((config) => {
  config.baseURL = "https://test.neuraac.com/api";
  config.headers.Authorization = `Bearer ${token}`;
  config.signal = AbortSignal.timeout(5000);
  return config;
});

export default axiosInstance;
