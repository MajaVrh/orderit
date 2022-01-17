import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GeneralView from "../views/GeneralView.vue";
import Ponuda from "../views/Ponuda.vue";
import Cart from "../views/Cart.vue";
import Table from "../components/Table.vue";
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "GeneralView",
    component: GeneralView,
    beforeEnter: (to, from, next) => {
      const tableExists = store.getters['getTable']
      if(tableExists) {
        next();
      }else {
        next({name: 'Home'})
      }
    }
  },
  {
    path: "/ponuda/:katID/:id",
    name: "Ponuda",
    component: Ponuda,
    beforeEnter: (to, from, next) => {
      const tableExists = store.getters['getTable']
      if(tableExists) {
        next();
      }else {
        next({name: 'Home'})
      }
    }
  },
  {
    path: "/narudzba",
    name: "Cart",
    component: Cart,
    beforeEnter: (to, from, next) => {
      const tableExists = store.getters['getTable']
      if(tableExists) {
        next();
      }else {
        next({name: 'Home'})
      }
    }
  },
  {
    path: "/new_order/:tableID",
    name: "Table",
    component: Table,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
