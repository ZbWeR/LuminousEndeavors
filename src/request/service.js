import axios from "axios";
import router from "@/router";
import { MessageCreator } from "@/components/message";


const messageBox = new MessageCreator();
/**
 * 展示消息弹窗
 * @param {String} text - 要显示的消息内容 
 */
const showMessage = (text) =>{
    messageBox.present({
        message:text,
        msgType:'error',
        duration:2000
    })
}
/**
 * 异常状态码处理
 * @param {Number} status - 状态码
 * @param {String} other - 错误信息 
 */
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
                // 自定状态码非20系显示错误信息
                showMessage(message);
                throw new Error(message);
            }
        },
        (error) => {
            let {response} = error;
            // NetWork Error处理
            if(!response) showMessage(error.message);
            // 其他错误处理
            else errorHandle(response?.status,response?.statusText);
            return Promise.reject(response);
        }
    )
    return service;
}

const service = createService();

export default service;