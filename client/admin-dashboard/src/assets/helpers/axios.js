import axios from "axios";
import { api } from "./URL";

const token = localStorage.getItem('token')
const axiosIntance = axios.create({
    baseURL: api,
    headers:{
        'Authorization':token ? `Bearer ${token}` : ''
    }
})

export default axiosIntance