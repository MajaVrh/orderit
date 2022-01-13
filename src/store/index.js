import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: [{}],
  },
  mutations: {
    increment(state, data) {
      state.cart.push(data);
    },
    incrementBy(state, n) {
      state.number += n;
    },
  },
  actions: {},
  modules: {},
});

export default store;
