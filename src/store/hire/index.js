import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {

  }
}

const getters = {

}

const mutations = {
}

const actions = {
  onHireTalent (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}/hire/joboffer`, payload)
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
  mutations,
  actions
}
