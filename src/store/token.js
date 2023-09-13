const tokenName = "token";

// 设置token,保存到本地与cookie
export function setToken(newToken) {
  localStorage.setItem(tokenName, newToken);
  document.cookie = `token=${newToken}; domain=glimmer.org.cn; path=/; Secure`;
  if (document.cookie) console.log("-- set success --");
}
// 获取token
export function getToken() {
  return localStorage.getItem(tokenName);
}
// 删除token
export function removeToken() {
  localStorage.removeItem(tokenName);
  document.cookie =
    "token=; domain=glimmer.org.cn; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure";
}
