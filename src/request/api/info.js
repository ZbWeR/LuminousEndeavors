import service from "../service";

/**
 * 获取用户基本信息
 * @param {*} token 
 * @returns 
 */
export function getUserInfo(token){
    return service({
        method: 'GET',
        url:'/user/userInfo',
        headers:{
            Authorization:token
        }
    })
}

/**
 * 获取用户报名信息
 * @param {*} token 
 * @returns 
 */
export function getSignInfo(token){
    return service({
        method: 'GET',
        url:'/sign',
        headers:{
            Authorization:token
        }
    })
}
/**
 * 提交用户报名信息
 * @param {*} token 
 * @returns 
 */
export function postSignInfo(token,data){
    return service({
        method: 'POST',
        url:'/sign',
        headers:{
            Authorization:token
        },
        data
    })
}

/**
 * 修改用户报名信息
 * @param {*} token 
 * @returns 
 */
export function updateSignInfo(token,data){
    return service({
        method: 'PUT',
        url:'/sign',
        headers:{
            Authorization:token
        },
        data
    })
}
/**
 * 获取用户提交的文件信息
 * @param {*} token 
 * @returns 
 */
export function getFileInfo(token){
    return service({
        method:'GET',
        url:'/userFiles/submitFile',
        headers:{
            Authorization:token
        }
    })
}

/**
 * 提交文件
 * @param {*} token 
 * @param {*} formData 
 * @returns 
 */
export function uploadFile(token, formData,handleProgress,signal) {
    return service({
      method: 'POST',
      url: '/userFiles/submit',
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data' 
      },
      data: formData,
      onUploadProgress: ProgressEvent => {handleProgress(ProgressEvent)},
      signal
    });
}

/**
 * 重置用户信息
 * @param {string} token - 身份校验
 * @param {string} phoneNumber - 电话号码
 * @param {string} password - 密码
 * @returns 
 */
export function resetUserInfo(token,phoneNumber,password){
    return service({
        method:'POST',
        url:'/user/updateUser',
        headers: {
            Authorization: token,
            },
        data:{phoneNumber,password}
    })
}