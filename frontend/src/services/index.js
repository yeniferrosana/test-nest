import axios from "axios";

const URL_BASE_API = "http://localhost:5173/frontend";

export const ApiRequest = axios.create({
  baseURL: URL_BASE_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: import.meta.env.VITE_API_KEY,
  },
});

// const validResponseFormat = /[2]\d\d/;

// ApiRequest.interceptors.response.use((response, error) => {
//   if (!validResponseFormat.test(response.status)) {
//     return Promise.reject(error);
//   } else {
//     return response.data;
//   }
// });
