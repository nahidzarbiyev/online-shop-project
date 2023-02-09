import axios from "axios";
import { api } from "./URL";


const axiosIntance = axios.create({
    baseURL: api,
    // headers:{
    //     'Authorization':''
    // }
})

export default axiosIntance