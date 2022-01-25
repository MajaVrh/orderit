<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
            <div class="PozicijaNatrag"> <router-link :to="{ name: 'Konobari' }"><i class="fas fa-arrow-circle-left natrag"></i> </router-link></div>
      <h1 class="podnaslov">DODAVANJE KONOBARA</h1>
      <p class="forme">Upišite ime konobara</p>
      <input
        class="styleForme"
        v-model="ImeKonobara"
        name="Ime korsnika"
        type="text"
        placeholder="Upišite ime korisnika"
      />
      <p class="forme">Upišite prezime konobara</p>
      <input
        class="styleForme"
        v-model="PrezimeKonobara"
        name="Prezime korsnika"
        type="text"
        placeholder="Upišite prezime korisnika"
      />
      <button @click="DodajKonobara" class="btn">Potvrdi</button>

      <div class="raspored"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { db, collection, addDoc } from "@/firebase";

export default {
  name: "Konobari",
  data: function () {
    return {
      ImeKonobara: "",
      PrezimeKonobara: "",
    };
  },
  methods: {
    async DodajKonobara() {
      try {
        console.log(
          "DODAVANJE KONOBARA:",
          this.ImeKonobara,
          this.PrezimeKonobara
        );
        const ImePrezimeKonobara = {
          ImeKonobara: this.ImeKonobara,
          PrezimeKonobara: this.PrezimeKonobara,
        };
        // Add a new document with a generated id.
        const docRef = await addDoc(
          collection(db, "PopisKonobara"),
          ImePrezimeKonobara
        );
        alert("Dodan je konobar");
        console.log("Document written with ID: ", docRef.id);
        this.ImeKonobara="",
        this.PrezimeKonobara=""
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: { Sidebar },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
}

.sredina {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
   max-width: 140vh;
  width: 120vh;
  

padding-left: 25%;
}

.raspored {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.podnaslov {
  font-family: "Amatic SC", cursive;
  font-size: 40px;
  color: #731642;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 6rem;
}

.styleForme {
  border-radius: 30px;
  font-size: 16px;
  border: 2px solid #731642;
  padding: 0.7rem;
  margin-bottom: 1rem;
  margin-top: rem;
}

.btn {
  min-width: 9rem;
  padding: 0.7rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  margin-top: 1rem;
  font-size: 20px;
}

.forme {
  color: black;
  margin-bottom: 0.4rem;
}
.natrag{color:#731642;

font-size: 40px;
margin-left: -4rem;
margin-top: 50vh;

height: 100%;
position: fixed;}

.PozicijaNatrag{margin-top: -3rem;
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
background-color: yellow;}

@media only screen and (max-width: 1400px) {
.natrag{
margin-left: 2rem;}
}
</style>
