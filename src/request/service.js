import axios from "axios";
import store from "@/store";

function createService(){
    const service = axios.create({
        baseURL: 'http://1.15.179.24:9520',
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
        },
    });
    // 请求拦截
    service.interceptors.request.use(
        // 获取 token
        (config) => {
            // const token = store.state.token;
            // token && (config.headers.Authorization = token);
            return config;
        },
        (error) => Promise.reject(error)
    )
    // 响应拦截
    service.interceptors.response.use(
        (response) => {
            const apiData = response.data;
            console.log(apiData);
        },
        (error) => {
            // console.log(error);
            Promise.reject(error);
        }
    )
    return service;
}

const service = createService();

export default service;