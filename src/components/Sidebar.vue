<template>
  <div class="sidebar">
    <div class="naslov"><b>{{nazivObjekta}}</b></div>
    <ul class="gore">
      <li v-if="store.admin">
        <router-link :to="{ name: 'UredjivanjePonude' }"
          >Uređivanje ponude</router-link
        >
      </li>
      <li v-if="store.admin || !store.admin">
        <router-link :to="{ name: 'Izvjestaj' }">Izvještaj</router-link>
      </li>
      <li v-if="store.admin">
        <router-link :to="{ name: 'Stolovi' }">Stolovi</router-link>
      </li>
      <li v-if="store.admin || !store.admin">
        <router-link :to="{ name: 'Narudzbe' }"> Narudžbe</router-link>
      </li>
      <li v-if="store.admin">
        <router-link :to="{ name: 'Konobari' }"> Konobari</router-link>
      </li>
      <li v-if="store.admin">
        <router-link :to="{ name: 'Info' }">Info </router-link>
      </li>
    </ul>
    <ul class="dole">
      <li v-if="store.admin">
        <a href="#" @click="logout()"><i class="fas fa-sign-out-alt "></i> </a>
      </li>
      <li v-if="!store.admin">
        <router-link :to="{ name: 'Home' }"
          ><i class="fas fa-arrow-circle-left odjava"></i>
        </router-link>
      </li>

      <img
        style="width: 150px; margin: 2rem auto 4rem auto"
        src="@/assets/l.png"
        alt=""
      />
    </ul>
  </div>
</template>

<script>
import { auth, signOut, doc, db, onSnapshot } from "@/firebase";
import store from "@/store/index";

export default {
  name: "sidebar",
  data() {
    return {
      store,
      nazivObjekta:"",
    };
  },
  mounted(){this.UcitavanjeNaziva()},
  methods: {
    logout() {
      signOut(auth)
        .then()
        .catch((error) => {
          console.log(error);
        });
    },
 
      async UcitavanjeNaziva() {
      onSnapshot(doc(db, "Info", "nazivObjekta"), (doc) => {
        this.nazivObjekta = doc.data().naziv;
      }); },
    },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #731642;
  width: 25%;
  height: 100vh;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: fixed;
}

a {
  display: flex;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 1rem 0;
  justify-content: center;

  &.router-link-exact-active {
    color: #ffffff;
    width: 100% !important;
    display: flex;
  background-color: #aa6b88f3;
    justify-content: center;
  }
}

a:hover {
  cursor: pointer;
  background-color: #ffffff2a;
}

.naslov {
  font-family: "Amatic SC", cursive;
  font-size: 35px;
  margin-bottom: 2rem;
}

.dole {
  margin-top: auto;
}

img {
  max-width: 90%;
  justify-content: center;
}

i {
  color: #ffffff;
  font-size: 2rem;
}


</style>
