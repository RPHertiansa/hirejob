import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {

}

const getters = {

}

const actions = {
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
  onRegisterPerekrut (context, payload) {
    console.log(payload)
    // return new Promise((resolve, reject) => {
    //   axios
    //     .post(`${url}/perekrut/register`, payload)
    //     .then(result => {
    //       resolve(result.data.message)
    //     })
    //     .catch(err => {
    //       reject(err.message)
    //     })
    // })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
