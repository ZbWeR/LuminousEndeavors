const tokenName = 'token';

// 设置token
export function setToken(newToken){
    localStorage.setItem(tokenName,JSON.stringify(newToken));
}
// 获取token
export function getToken(){
    return JSON.parse(localStorage.getItem(tokenName));
}
// 删除token
export function removeToken(){
    localStorage.removeItem(tokenName);
}