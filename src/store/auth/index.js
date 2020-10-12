import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    token: localStorage.getItem('token') || null,
    refreshToken: localStorage.getItem('refreshToken') || null
  }
}

const getters = {
  isLogin (state) {
    if (state.token !== null) {
      return true
    } else {
      return false
    }
  }
}

const actions = {
  onLoginPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/pekerja/login`, payload)
        .then(result => {
          localStorage.setItem('emailpekerja', result.data.data.emailpekerja)
          localStorage.setItem('idpekerja', result.data.data.idpekerja)
          localStorage.setItem('refreshToken', result.data.data.refreshToken)
          localStorage.setItem('status', result.data.data.status)
          localStorage.setItem('token', result.data.data.token)
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onLoginPerekrut (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/perekrut/login`, payload)
        .then(result => {
          localStorage.setItem('emailperekrut', result.data.data.emailperekrut)
          localStorage.setItem('idperekrut', result.data.data.idperekrut)
          localStorage.setItem('refreshToken', result.data.data.refreshToken)
          localStorage.setItem('status', result.data.data.status)
          localStorage.setItem('token', result.data.data.token)
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onLogoutPekerja (context) {
    return new Promise(resolve => {
      localStorage.removeItem('emailpekerja')
      localStorage.removeItem('idpekerja')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('status')
      localStorage.removeItem('token')
      resolve()
    })
  },
  onLogoutPerekrut (context) {
    return new Promise(resolve => {
      localStorage.removeItem('emailperekrut')
      localStorage.removeItem('idperekrut')
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('status')
      localStorage.removeItem('token')
      resolve()
    })
  },
  onRegisterPerekrut (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/perekrut/register`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onRegisterPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/pekerja/register`, payload)
        .then(result => {
          resolve(result.data.message)
        })
        .catch(err => {
          reject(err.message)
        })
    })
  },
  onForgotPasswordPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/pekerja/ForgotPassword`, payload)
        .then(result => {
          resolve(result.data.message)
        }).catch(err => reject(err.message))
    })
  },
  onForgotPasswordPerekrut (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/perekrut/ForgotPassword`, payload)
        .then(result => {
          resolve(result.data.message)
        }).catch(err => reject(err.message))
    })
  },
  onResetPasswordPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/pekerja/newPassword/${payload.userkey}`, {
          passwordpekerja: payload.passwordpekerja
        })
        .then(result => {
          resolve(result)
        }).catch(err => reject(err.message))
    })
  },
  onResetPasswordPerekrut (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/perekrut/newPassword/${payload.userkey}`, {
          passwordperekrut: payload.passwordperekrut
        })
        .then(result => {
          resolve(result)
        }).catch(err => reject(err.message))
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
