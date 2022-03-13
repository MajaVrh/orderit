import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {auth,onAuthStateChanged} from "@/firebase";
Vue.config.productionTip = false

let app = null;

onAuthStateChanged(auth, (user) => {
  const currentRoute=router.currentRoute; 
  if (user) {
  store.admin = user.email;
  const uid = user.uid;

  } else {
  store.admin=null;
  if(currentRoute.meta.needsUser){router.push({name:"Home"})}
  }

  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
});



