import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid } from 'uuid'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    cart: [],
    tableID: ''
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
  },
  mutations: {
    setTable(state, payload) {
      state.tableID = payload;
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
        existingItem.amount = payload.amount
        state.cart[existingItem] = existingItem
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
