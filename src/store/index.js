import { createStore } from 'vuex'
import { getToken,setToken,removeToken } from './token'

export default createStore({
  state: {
    token: getToken() || 'This is a useless token',
    loginState: getToken() ? true :false,
  },
  getters: {
  },
  mutations: {
    updateToken:(state,newVal)=>{setToken(newVal);state.token = newVal},
    updateLoginState:(state,newVal) => state.loginState = newVal,
    quitLogin:(state) => {removeToken();state.loginState = false}
  },
  actions: {
  },
  modules: {
  }
})
