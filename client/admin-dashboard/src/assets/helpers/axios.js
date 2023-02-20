import axios from "axios";
import { api } from "./URL";
import store from "../redux/store";
import { authConstants } from "../redux/actions/constants";
const token = localStorage.getItem("token");
const axiosIntance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
axiosIntance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});
axiosIntance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const { status } = error.response;
    if (status === 500 || status === 400) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGIN_SUCCESS });
    }
    return Promise.reject(error);
  }
);
export default axiosIntance;
