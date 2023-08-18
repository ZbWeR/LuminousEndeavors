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
  