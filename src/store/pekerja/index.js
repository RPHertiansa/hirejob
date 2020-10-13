import axios from 'axios'
import { url } from '../../helper/env'

const state = () => {
  return {
    dataPekerja: [],
    detailDetail: [],
    detailProfilPekerja: {
      generic: [],
      pengalaman: [],
      portofolio: []
    }
  }
}

const getters = {
  getPekerja (state) {
    return state.dataPekerja
  },
  getDetailPekerja (state) {
    return state.detailDetail
  },
  getDetailProfilPekerja (state) {
    return state.detailProfilPekerja.generic
  },
  getPengalaman (state) {
    return state.detailProfilPekerja.pengalaman
  },
  getPortofolio (state) {
    return state.detailProfilPekerja.portofolio
  }
}

const mutations = {
  SET_ALL_DATA (state, payload) {
    state.dataPekerja = payload
  },
  SET_DETAIL_DATA (state, payload) {
    state.detailDetail = payload
  },
  SET_DETAIL_PROFIL_PEKERJA (state, payload) {
    state.detailProfilPekerja.generic = payload
  },
  SET_PENGALAMAN (state, payload) {
    state.detailProfilPekerja.pengalaman = payload
  },
  SET_PORTOFOLIO (state, payload) {
    state.detailProfilPekerja.portofolio = payload
  }
}

const actions = {
  getPekerja (context, payload) {
    const fd = {
      skill: payload.skill === undefined ? '' : payload.skill,
      page: payload.page === undefined ? '' : payload.page,
      sort: payload.sort === undefined ? '' : payload.sort
    }
    return new Promise((resolve, reject) => {
      axios.get(`${url}/pekerja/getall?skill=${fd.skill}&sortby=${fd.sort}&page=${fd.page}`)
        .then((response) => {
          context.commit('SET_ALL_DATA', response.data.data)
          resolve(response.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getDetailPekerja (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/pekerja/getDetail/${payload}`)
        .then((response) => {
          // console.log(typeof (response.data.data[0].skill))
          context.commit('SET_DETAIL_DATA', response.data.data[0])
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getDetailProfilPekerja (context, payload) {
    // console.log(`id dari url ${payload}`)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/pekerja/getDetail/${payload}`)
        .then((response) => {
          // console.log(response.data.data[0])
          context.commit('SET_DETAIL_PROFIL_PEKERJA', response.data.data[0])
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getPengalaman (context, payload) {
    // console.log(`id dari url ${payload}`)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/pengalaman/getall/${payload}`)
        .then((response) => {
          // console.log(response.data.data)
          context.commit('SET_PENGALAMAN', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  getPortofolio (context, payload) {
    // console.log(`id dari url ${payload}`)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/portofolio/getall/${payload}`)
        .then((response) => {
          // console.log(response.data.data)
          context.commit('SET_PORTOFOLIO', response.data.data)
        }).catch((err) => {
          console.log(err)
        })
    })
  },
  addPengalaman (context, payload) {
    // console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/pengalaman/insert`, payload)
        .then((response) => {
          // console.log(response.data)
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  updatePengalaman (context, payload) {
    // console.log(payload)
    return new Promise((resolve, reject) => {
      axios.patch(`${url}/pengalaman/update/${payload.idpengalaman}`, payload)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  deletePengalaman (context, payload) {
    // console.log(payload)
    return new Promise((resolve, reject) => {
      axios.delete(`${url}/pengalaman/delete/${payload}`)
        .then((response) => {
          resolve(response)
        })
        .catch((err) => {
          reject.log(err)
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
