import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    dataPerekrut: [],
    detail: [],
    getProfile: []
  }
}

const getters = {
  getPerekrut (state) {
    return state.dataPerekrut
  },
  getDetailPerekrut (state) {
    return state.detail
  },
  getProfile (state) {
    return state.getProfile
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.dataPerekrut = payload
  },
  SET_DETAIL_DATA (state, payload) {
    state.detail = payload
  },
  SET_PROFILE_DATA (state, payload) {
    state.getProfile = payload
  }
}

const actions = {
  getPerekrut (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/perekrut/getall`)
        .then((response) => {
          context.commit('SET_ALL_DATA', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getDetailPerekrut (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/perekrut/getdetail/${payload}`)
        .then((response) => {
          context.commit('SET_DETAIL_DATA', response.data.data[0])
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getProfileDetail (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/perekrut/getdetail/${payload}`)
        .then((response) => {
          context.commit('SET_PROFILE_DATA', response.data.data[0])
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  updateImage (context, payload) {
    return new Promise((resolve, reject) => {
      const fd = new FormData()
      fd.append('imageperekrut', payload.imageperekrut)
      axios.patch(`${url}/perekrut/update/${payload.idperekrut}`, fd).then((response) => {
        resolve(response)
      }).catch((err) => reject(err))
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
