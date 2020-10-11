import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
    path: '/forgotpass-pekerja',
    name: 'ForgotPassPekerja',
    component: () => import('../views/ForgotPassPekerja.vue')
  },
  {
    path: '/forgotpass-perekrut',
    name: 'ForgotPassPerekrut',
    component: () => import('../views/ForgotPassPerekrut.vue')
  },
  {
    path: '/resetpass-pekerja',
    name: 'ResetPassPekerja',
    component: () => import('../views/ResetPassPekerja.vue')
  },
  {
    path: '/resetpass-perekrut',
    name: 'ResetPassPerekrut',
    component: () => import('../views/ResetPassPerekrut.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLogin']) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
