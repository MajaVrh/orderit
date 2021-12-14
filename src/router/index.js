import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/konobar',
    name: 'Konobar',
    component: () => import( '../views/konobar.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/uredjivanjeponude',
    name: 'UredjivanjePonude',
    component: () => import( '../views/UredjivanjePonude.vue')
  },
  {
    path: '/izvjestaj',
    name: 'Izvjestaj',
    component: () => import( '../views/Izvjestaj.vue')
  },
  {
    path: '/stolovi',
    name: 'Stolovi',
    component: () => import( '../views/Stolovi.vue')
  },
  {
    path: '/narudzbe',
    name: 'Narudzbe',
    component: () => import( '../views/Narudzbe.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import( '../views/Info.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
