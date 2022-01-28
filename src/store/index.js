import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin:"",
    konobar: ""
  },
  mutations: { // state- objekt gore // payload - šaljemo u funkciju
    setKonobar(state, payload) {
      localStorage.setItem("konobar", payload)
      state.konobar = payload
    }
  },
  getters: {
    konobar(state) {
      return state.konobar;
    }
  },
  actions: {
  },
  modules: {
  }
})