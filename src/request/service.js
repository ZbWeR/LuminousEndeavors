import axios from "axios";

function createService(){
    const service = axios.create({
        baseURL: 'http://1.15.179.24:9520',
        timeout: 5000,
        headers: {
            "Accept":"*/*",
            "Content-Type": "application/json",
        },
    });
    // 请求拦截
    service.interceptors.request.use(
        // 获取 token
        (config) => config,
        (error) => Promise.reject(error)
    )
    // 响应拦截
    service.interceptors.response.use(
        (response) => { 
            const apiData = response.data;
            const {code,message} = apiData;
            if(code !== 200){
                console.log(message);
                throw new Error(message);
            }
            return response;
        },
        (error) => {
            console.log(error);
            Promise.reject(error);
        }
    )
    return service;
}

const service = createService();

export default service;