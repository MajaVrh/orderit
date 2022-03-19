import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    
  },
  {
    path: "/uredjivanjeponude",
    name: "UredjivanjePonude",
    component: () => import("../views/UredjivanjePonude.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/uredjivanjeponude/:id",
    name: "UredivanjePonudeDetail",
    component: () => import("../views/UredivanjePonudeDetail.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/uredjivanjeponude/:id/:idPodkategorije",
    name: "UredivanjePonudeDetailPotkategorije",
    component: () => import("../views/UredivanjePonudeDetailPotkategorije.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/izvjestaj",
    name: "Izvjestaj",
    component: () => import("../views/Izvjestaj.vue"),
  },
  {
    path: "/izvjestaji",
    name: "Izvjestaji",
    component: () => import("../views/Izvjestaji.vue"),
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/stolovi",
    name: "Stolovi",
    component: () => import("../views/Stolovi.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/stolovi/:id",
    name: "StolDetail",
    component: () => import("../views/StolDetail.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/narudzbe",
    name: "Narudzbe",
    component: () => import("../views/Narudzbe.vue"),
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("../views/Info.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/konobari",
    name: "Konobari",
    component: () => import("../views/Konobari.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/odabirkonobara",
    name: "OdabirKonobara",
    component: () => import("../views/OdabirKonobara.vue"),
  },
  {
    path: "/dodavanjezaposlenika",
    name: "dodavanjeZaposlenika",
    component: () => import("../views/Konobari.vue"),
    meta: {
      needsUser: true,
    }, 
  },
  {
    path: "/dodajkonobara",
    name: "DodajKonobara",
    component: () => import("../views/DodajKonobara.vue"), 
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/dodajstol",
    name: "DodajStol",
    component: () => import("../views/DodajStol.vue"), 
    meta: {
      needsUser: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => { 
  const noUser = store.admin === null; //pogledamo ako uopće imamo postavljenog usera (postavlja se fa u app.vue)
  // ako ga imamo -> f
  if (noUser && to.meta.needsUser) {
    //ako nemamo user i želimo ić tamo di nan on treba, odvede nas u login
    next("/");
  } else {
    next();
  }
});

export default router;
