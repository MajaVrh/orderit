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
    path: "/izvjestaj",
    name: "Izvjestaj",
    component: () => import("../views/Izvjestaj.vue"),
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
    }, // ovo moras promjeniti MAJO, nemoj se poslije na mene derati da ne radi, s poštovanjem, Valek
  },
  {
    path: "/dodajkonobara",
    name: "DodajKonobara",
    component: () => import("../views/DodajKonobara.vue"), // ovo moras promjeniti MAJO, nemoj se poslije na mene derati da ne radi, s poštovanjem, Valek
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
  console.log("Stara ruta", from.name, "->", to.name, "korisnik", store.admin);
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
