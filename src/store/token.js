const tokenName = 'token';

// 设置token
export function setToken(newToken){
    localStorage.setItem(tokenName,newToken);
}
// 获取token
export function getToken(){
    return localStorage.getItem(tokenName);
}
// 删除token
export function removeToken(){
    localStorage.removeItem(tokenName);
}