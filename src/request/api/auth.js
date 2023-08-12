import service from "../service";

export function SendVerifyCode(data) {
    return service({
        method: 'POST',
        url: `/user/sendCode`,
        data:{
            "phoneNumber":15359586391
        }
    })
}

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