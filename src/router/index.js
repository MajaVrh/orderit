import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pića from "../views/Pica.vue";
import Info from "../views/Info.vue";
import Speciali from "../views/Speciali.vue";
import Slastice from "../views/Slastice.vue";
import BezalkoholnaPica from "../views/BezalkoholnaPica.vue";
import TopliNapitci from "../views/TopliNapitci.vue";
import Kokteli from "../views/Kokteli.vue";
import AlkoholnaPica from "../views/AlkoholnaPica.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pica",
    name: "Pića",
    component: Pića,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/speciali",
    name: "Speciali",
    component: Speciali,
  },
  {
    path: "/slastice",
    name: "Slastice",
    component: Slastice,
  },
  {
    path: "/bezalkoholnapica",
    name: "Bezalkoholna Pica",
    component: BezalkoholnaPica,
  },
  {
    path: "/toplinapitci",
    name: "Topli Napitci",
    component: TopliNapitci,
  },
  {
    path: "/kokteli",
    name: "Kokteli",
    component: Kokteli,
  },
  {
    path: "/alkoholnapica",
    name: "Alkoholna Pica",
    component: AlkoholnaPica,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
