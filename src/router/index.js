import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/login-pekerja',
    name: 'LoginPekerja',
    component: () => import('../views/LoginPekerja.vue')
  },
  {
    path: '/login-perekrut',
    name: 'LoginPerekrut',
    component: () => import('../views/LoginPerekrut.vue')
  },
  {
    path: '/register-pekerja',
    name: 'RegisterPekerja',
    component: () => import('../views/RegisterPekerja.vue')
  },
  {
    path: '/register-perekrut',
    name: 'RegisterPerekrut',
    component: () => import('../views/RegisterPerekrut.vue')
  },
  {
    path: '/forgotpass',
    name: 'ForgotPass',
    component: () => import('../views/ForgotPass.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
