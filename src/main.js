import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel'
import { url } from './helper/env'
import axios from 'axios'

axios.defaults.headers = {
  token: localStorage.getItem('token')
}

// handle token expired
if (localStorage.getItem('status') === 'pekerja') {
  axios.interceptors.response.use((response) => {
    if (response.data.message === 'Token Expired! Please log in again') {
      return new Promise((resolve, reject) => {
        axios.post(`${url}/pekerja/refreshToken`, {
          refreshToken: localStorage.getItem('refreshToken')
        })
          .then(res => {
            resolve()
            localStorage.setItem('token', res.data.data.token)
            window.location = '/'
          })
          .catch(err => reject(err.message))
      })
    } else {
      return response
    }
  })
} else {
  axios.interceptors.response.use((response) => {
    if (response.data.message === 'Token Expired! Please log in again') {
      return new Promise((resolve, reject) => {
        axios.post(`${url}/perekrut/refreshToken`, {
          refreshToken: localStorage.getItem('refreshToken')
        })
          .then(res => {
            resolve()
            console.log(res.data.data.token)
            localStorage.setItem('token', res.data.data.token)
            window.location = '/'
          })
          .catch(err => reject(err.message))
      })
    } else {
      return response
    }
  })
}

Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
