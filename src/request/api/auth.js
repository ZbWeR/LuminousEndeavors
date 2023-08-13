import service from "../service";

/**
 * 发送短信验证码,无需token
 * @param {Number}  phoneNumber - 电话号码
 * @returns 包含响应数据的Promise对象
 */
export function SendVerifyCode(phoneNumber) {
    return service({
        method: 'POST',
        url: `/user/sendCodeToPhone`,
        data:{
            phoneNumber
        }
    })
}
/**
 * 验证短信验证码
 * @param {Number} code - 用户输入的验证码
 * @param {String} tempKey - 短信验证临时标志
 * @returns 包含响应数据的Promise对象
 */
export function verifyPhoneNumber(code,tempKey){
    return service({
        method:'POST',
        url:'/user/verifyCode',
        data:{
            code,tempKey
        }
    })
}

/**
 * 获取图形验证码
 * @returns 包含响应数据的Promise对象
 */
export function getCaptchaImage(){
    return service({
        method:'GET',
        url:'/captchaImage'
    })
}

/**
 * 验证图形验证码
 * @returns 
 */
export function verifyCaptchaImage(){
    return service({
        method: 'POST',
        url: '/captchaImage',
        data:{
            "uuid":"299d134dbabd4e099d88b10bc09334ab",
            "codeOfUser":"32"
        }
    })
}

/**
 * 提交注册信息
 * @param {Object} data - 包含注册信息的对象 
 * @returns 包含响应数据的Promise对象
 */
export function register(data){
    return service({
        method:'POST',
        url:'/user/register',
        data:data
    })
}