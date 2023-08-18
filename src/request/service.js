import axios from "axios";
import router from "@/router";
import { MessageCreator } from "@/components/message";


const messageBox = new MessageCreator();
const showMessage = (text) =>{
    messageBox.present({
        message:text,
        msgType:'error',
        duration:2000
    })
}

const errorHandle = (status,other) =>{
    switch(status){
        // 未登录或登录状态过期
        case 401:
            router.replace({ name: 'auth' });
            showMessage('请先登录');
            break;
        default:
            console.log(other);
    }
}

function createService(){
    const service = axios.create({
        baseURL: 'http://1.15.179.24:9520',
        timeout: 60000,
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
            if(code === 200 || code===204){
                return response;
            } else {
                showMessage(message);
                throw new Error(message);
            }
        },
        (error) => {
            let {response} = error;
            console.log(error);
            errorHandle(response?.status,response?.statusText);
            return Promise.reject(response);
        }
    )
    return service;
}

const service = createService();

export default service;