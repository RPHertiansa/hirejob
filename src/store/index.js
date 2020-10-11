import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import pekerja from './pekerja'
import perekrut from './perekrut'
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
    perekrut
  }
})
