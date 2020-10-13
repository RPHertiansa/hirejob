import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import pekerja from './pekerja'
import perekrut from './perekrut'
import chat from './chat'
import hire from './hire'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    pekerja,
    perekrut,
    chat,
    hire
  }
})
