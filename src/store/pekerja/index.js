import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    dataPekerja: [],
    detailDetail: []
  }
}

const getters = {
  getPekerja (state) {
    return state.dataPekerja
  },
  getDetailPekerja (state) {
    return state.detailDetail
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.dataPekerja = payload
  },
  SET_DETAIL_DATA (state, payload) {
    state.detailDetail = payload
  }
}

const actions = {
  getPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      // console.log(payload)
      axios.get(`${url}/pekerja/getall?skill=${payload}`)
        .then((response) => {
          context.commit('SET_ALL_DATA', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getDetailPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/pekerja/getDetail/${payload}`)
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
