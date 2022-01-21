import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from 'uuid'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    cart: [],
    ukupnaCijena: 0,
    tableID: null
  },
  getters: {
    getTable(state) {
      return state.tableID;
    },
    getCart(state) {
      return state.cart
    },
    getCartSize(state) {
      return state.cart.length
    },
    getTotalPrice(state) {
      return state.ukupnaCijena
    }
  },
  mutations: {
    resetStore(state) {
      state.tableID = {};
      state.cart.length = 0;
      state.ukupnaCijena = 0
    },
    setTable(state, payload) {
      state.tableID = payload
    },
    addPrice(state, payload) {
      state.ukupnaCijena += payload;
    },
    removePrice(state, payload) {
      state.ukupnaCijena -= payload;
    },
    setItemsInCart(state, payload) {
      const existingItem = state.cart.find(item => item.id == payload.item.id)
      if(existingItem) {
        existingItem.amount += payload.amount;
        state.cart[existingItem] = existingItem;
      }else {
        payload.item.amount = payload.amount;
        state.cart.push(payload.item)
      }
    },
    setItemInCart(state, payload) {
      const existingItem = state.cart.find(item => item.id == payload.item.id)

      if(payload.amount <= 0) {
        state.cart = state.cart.filter(item => item.id != payload.item.id)
      }else {
        let newItem = existingItem;
        newItem.amount = payload.amount
        state.cart[newItem] = newItem
      }
    }
  },
  actions: {
    addItemsToCart({commit, state}, item) {
      commit('setItemsInCart', {item: item.item, amount: item.amount})
    },
    setItemToCart({commit, state}, item) {
      commit('setItemInCart', {item: item.item, amount: item.amount})
    }
  },
  modules: {},
});

export default store;
