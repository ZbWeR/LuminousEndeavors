import { createStore } from 'vuex'
import { getToken,setToken } from './token'

export default createStore({
  state: {
    token: getToken() || 'This is a useless token',
  },
  getters: {
  },
  mutations: {
    updateToken:(state,newVal)=>{setToken(newVal);state.token = newVal},
  },
  actions: {
  },
  modules: {
  }
})
