import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {

}

const getters = {

}

const actions = {
  onRegister (context, payload) {
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions
}
