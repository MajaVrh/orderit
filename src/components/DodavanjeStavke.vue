<template>
  <div class="Stavka">
    <div class="ButtonDodajVidljiv" v-if="!Vidljiv" @click="Vidljiv = !Vidljiv">
      <i class="fas fa-plus"></i>
    </div>
    <div class="ButtonDodaj" v-if="Vidljiv">
      <input
        class="UpisiStavku"
        v-model="NazivStavke"
        v-if="Vidljiv"
        placeholder="Naziv stavke"
        type="text"
      />

      <input
        class="UpisiStavku"
        v-model="CijenaStavke"
        v-if="Vidljiv"
        placeholder="Cijena stavke"
        type="text"
      />

      <textarea
        class="UpisiStavkuInfo"
        v-model="InfoStavka"
        v-if="Vidljiv"
        placeholder="Informacije o stavci"
        type="text"
      />
      <button class="potvrdiStavku" v-if="Vidljiv" @click="Dodaj">
        Potvrdi
      </button>
    </div>
  </div>
</template>

<script>
import { db, collection, addDoc ,doc} from "@/firebase";
export default {
  data() {
    return {
      Vidljiv: false,
      NazivStavke: "",
      CijenaStavke: "",
      InfoStavka: "",
    };
  },
  name: "DodavanjeStavke",
  methods: {
    async Dodaj() {try{
      const ID = this.$route.params.id;
    await addDoc(
            collection(doc(collection(db, 'Kategorija'),ID), 'Stavka'),
        {
          Naziv: this.NazivStavke,
          Cijena:this.CijenaStavke,
          Info: this.InfoStavka
        }
      );
      this.Vidljiv = !this.Vidljiv;
         this.NazivStavke= ""
      this.CijenaStavke= ""
      this.InfoStavka= ""
      console.log("DODANA STAVKA");
    }catch (error) {
        console.log(error);}}},}

</script>
<style scoped>
.Stavka {
  background-color: #731642;
  width: 24rem;
  min-height: 3rem;
  border-radius: 15px;
  margin-top: 1rem;
  font-size: 16px;
  color: white;
  display: flex;

  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.ButtonDodajVidljiv {
  padding: 1rem;
  width: 100%;
  height: 100%;
   color: white !important;
}

.ButtonDodajVidljiv:hover {
  cursor: pointer;
  background-color: #aa6b88e3;
  opacity: 50;
  border: #721741cb;
  color: #ffffff !important;
  border-radius: 15px;
}

.ButtonDodaj {
  padding: 1rem;
  width: 100%;
  height: 100%;
 
}

.UpisiStavku {
  margin: 0.3rem;
  width: 90%;
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
}

.potvrdiStavku {
  background-color: #ffffff;
  color: #731642;
  border-radius: 7px;
  margin-top: 0.3rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: none;
  font-weight: bold;
  outline: none;
}

.potvrdiStavku:hover {
  cursor: pointer;
  background-color: #aa6b88e3;
  color: #ffffff;
}

.UpisiStavkuInfo {
  margin: 0.3rem;
  width: 90%;
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
  height: 4rem;
  min-height: 4rem;
  min-width: 90%;
  text-align: start;
  padding-top: -0.3rem;
  max-width: 90%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
