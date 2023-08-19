/* global process */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectIntroduction.vue')
  },
  {
    path: '/more',
    name: 'more',
    component: () => import(/* webpackChunkName: "more" */ '../views/MoreInfo.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "more" */ '../views/LoginView.vue')
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: () => import(/* webpackChunkName: "more" */ '../views/UserCenter.vue'),
    // 登录状态判定
    beforeEnter: (to, from, next) => {
      if (store.state.loginState == false) next({ name: 'auth' })
      else next()
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
