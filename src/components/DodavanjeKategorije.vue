<template>
  <div class="DodavanjeKategorije">
    <button class="gumb1" v-if="!Vidljiv" @click="Vidljiv = !Vidljiv">
      <div class="Dodaj" v-if="!Vidljiv"><i class="fas fa-plus"></i> Dodaj</div>
    </button>

    <button class="gumb2" v-if="Vidljiv">
      <input
        class="UpisiKategoriju"
        v-model="KategorijaIme"
        v-if="Vidljiv"
        placeholder="   Ime kategorije"
     
        type="text"
      />
      <button
        class="potvrdiKategoriju"
        v-if="Vidljiv"
        @click="DodajGlavnuKategoriju"
      >
        Potvrdi
      </button>
    </button>
  </div>
</template>

<script>
import { db, collection, addDoc } from "@/firebase";
export default {
  data() {
    return {
      Vidljiv: false,
      KategorijaIme: "",
    };
  },
  name: "DodavanjeKategorije",
  methods: {
    async DodajGlavnuKategoriju() {
      try {
        console.log("DODAVANJE KATEGORIJE:", this.KategorijaIme);
        const KategorijaDodaj = { Ime: this.KategorijaIme };
        // Add a new document with a generated id.
        const docRef = await addDoc(
          collection(db, "Kategorija"),
          KategorijaDodaj
        );
        this.Vidljiv = !this.Vidljiv;

        console.log("Document written with ID: ", docRef.id);
        this.KategorijaIme = "";
      } catch (error) {
        console.log(error);
      }
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
.gumb2 {
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
 background-color: #aa6b88e3;
  
  border: #721741cb;
  color: #ffffff !important;
}
.potvrdiKategoriju {
  background-color: #ffffff;
  color: #731642;
  border-radius: 7px;
  margin-top: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  font-weight: bold;
  outline: none;
}

.UpisiKategoriju {
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
  width: 8rem;
}

.fa-plus {
  margin-right: 0.5rem;
  color: #ffffff;

}
</style>
