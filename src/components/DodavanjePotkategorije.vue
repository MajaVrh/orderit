<template>
  <div class="DodavanjeKategorije">
    <button class="gumb1" v-if="!Vidljiv" @click="Vidljiv = !Vidljiv">
      <div class="Dodaj" v-if="!Vidljiv"><i class="fas fa-plus"></i> Dodaj</div>
    </button>

    <button class="gumb2" v-if="Vidljiv">
      <input
        class="UpisiKategoriju"
        v-model="PotkategorijaIme"
        placeholder=" Ime potkategorije"
        v-if="Vidljiv"
        type="text"
      />

<div @click="DodajGlavnuKategoriju" v-if="Vidljiv">
         <potvrdi /></div>
      
      <i class="fas fa-times odustani" @click="Vidljiv = !Vidljiv"></i>
    </button>
  </div>
</template>

<script>
import potvrdi from './potvrdi.vue';
import { db, collection, addDoc, doc } from "@/firebase";
export default {
  data() {
    return {
      Vidljiv: false,
      PotkategorijaIme: "",
    };
  },
  name: "DodavanjePotkategorije",
   components: { potvrdi},
  methods: {
    async DodajGlavnuKategoriju() {
      const ID = this.$route.params.id;
      await addDoc(
        collection(doc(collection(db, "Kategorija"), ID), "Potkategorija"),
        {
          Ime: this.PotkategorijaIme,
        }
      );
      this.Vidljiv = !this.Vidljiv;
      this.PotkategorijaIme = "";
      console.log("Dodana je potkategorija");
    },
  },
};
</script>
<style scoped>
.gumb1 {
  border: 4px solid #731642;
  border-radius: 10px;
  background-color: #731642;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  min-width: 11.4rem;
  max-height: 6.5rem;
  max-width: 11.4rem;
  min-height: 6.5rem;
  display: flex;
  flex-direction: column;
  /*text-shadow: 1px 1px #7e7e7ea6;
    box-shadow: 1px 1px #7e7e7ea6; */
  justify-content: center;
  align-items: center;
}

.gumb1:hover {
  cursor: pointer;
  background-color: #721741d5;
  opacity: 50;
  border: #721741d5;
  color: #ffffff !important;
}

.gumb2 {
  border: 4px solid #731642;
  border-radius: 10px;
  background-color: #731642;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  padding: 1rem;
  min-width: 11.4rem;
  max-height: 6.5rem;
  max-width: 11.4rem;
  min-height: 6.5rem;
  display: flex;
  flex-direction: column;

  /*text-shadow: 1px 1px #7e7e7ea6;
    box-shadow: 1px 1px #7e7e7ea6; */
  justify-content: center;
  align-items: center;
}


.UpisiKategoriju {
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
  width: 8rem;
  margin-bottom: 0.5rem;
}

.fa-plus {
  margin-right: 0.5rem;
  color: #ffffff;
 
}



.odustani{margin-top: 0.2rem;}

</style>
