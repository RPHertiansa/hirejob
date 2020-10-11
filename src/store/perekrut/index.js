import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    dataPerekrut: [],
    detail: []
  }
}

const getters = {
  getPerekrut (state) {
    return state.dataPerekrut
  },
  getDetailPerekrut (state) {
    return state.detail
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.dataPerekrut = payload
  },
  SET_DETAIL_DATA (state, payload) {
    state.detail = payload
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
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}