<template>
  <button class="noStyle" @click="odaberiKonbobara" :to="{ name: link }">
    <div class="krug">
      <img
      class="slika"
        style="width: 80px; margin: 0.8rem auto auto auto"
        src="@/assets/user.png"
        alt=""
      />

      <p class="naziv">{{ info.ImeKonobara }} {{ info.PrezimeKonobara[0] }}.</p>
      <button class="ButtonKonobar" v-if="store.admin" @click="brisanje">
        <i class="fas fa-times-circle ikona"></i>
      </button>
    </div>
  </button>
</template>

<script>
import { doc, deleteDoc, db } from "@/firebase";
import store from "@/store/index";
import { mapMutations } from "vuex";

export default {
  name: "Konobar",
  props: ["info", "id"],
  data() {
    return { store, link: store.admin ? "Konobari" : "Izvjestaj" };
  },

  methods: {
    ...mapMutations({ postaviKonobara: "setKonobar" }), //setkonobar je u index.js-u (store)
    odaberiKonbobara() {
      console.log("RadiM");
      this.postaviKonobara(
        `${this.info.ImeKonobara} ${this.info.PrezimeKonobara[0]}`
      ); //info preko propsa
      this.$router.replace({ name: this.link });
    },
    async brisanje() {
      await deleteDoc(doc(db, "PopisKonobara", this.id));
      console.log("BRISANJE");
    },
  },
};
</script>

<style>
.ButtonKonobar {
 
  border-radius: 50%;
  z-index: 9999;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

i {
  color: #731642;
  font-size: 18px;
  z-index: 9999;
}

.ikona:hover {
  cursor: pointer;
}

.noStyle {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.krug {
  
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 100%;
  border: 0.22rem solid #731641;
  padding: 0.5rem;
  margin: 1rem;

  margin-right: 1rem;
}

i {
  z-index: 999;
}

.naziv {
  color: #731642;
margin-bottom: 0.3rem;
  font-size: 16px;
  font-weight: bold;
}

a {
  text-decoration: none;
}

.krug:hover {
  background-color: #7217411f;
}

</style>
