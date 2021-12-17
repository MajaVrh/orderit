import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Drinks from "../views/Drinks.vue";
import Info from "../views/Info.vue";
import Specials from "../views/Specials.vue";
import Sweats from "../views/Sweats.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/drinks",
    name: "Drinks",
    component: Drinks,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/specials",
    name: "Specials",
    component: Specials,
  },
  {
    path: "/Sweats",
    name: "Sweats",
    component: Sweats,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
