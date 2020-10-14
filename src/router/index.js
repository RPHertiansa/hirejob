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
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/hire',
    name: 'Hire',
    component: () => import('../views/Hire.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import('../views/Inbox.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile-perekrut',
    name: 'ProfilePerekrut',
    component: () => import('../views/ProfilePerekrut.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-profile-pekerja',
    name: 'EditProfilePekerja',
    component: () => import('../views/EditProfilePekerja.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-profile-perekrut',
    name: 'EditProfilePerekrut',
    component: () => import('../views/EditProfilePerekrut.vue'),
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
