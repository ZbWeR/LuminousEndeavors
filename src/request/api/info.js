import service from "../service";

export function getUserInfo(token){
    return service({
        method: 'GET',
        url:'/user/userInfo',
        headers:{
            Authorization:token
        }
    })
}

export function getSignInfo(token){
    return service({
        method: 'GET',
        url:'/sign',
        headers:{
            Authorization:token
        }
    })
}