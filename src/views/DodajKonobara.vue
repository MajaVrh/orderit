<template>
  <div class="container">
    <sidebar />
           <div class="PozicijaNatrag"> <router-link :to="{ name: 'Konobari' }"><Natrag/> </router-link></div>
    <div class="sredina">
     
      <h1 class="podnaslov">DODAVANJE KONOBARA</h1>
      <p class="forme">Upišite ime korisnika</p>
      <input
        class="styleForme"
        v-model="ImeKonobara"
        name="Ime korsnika"
        type="text"
        placeholder="ime korisnika"
      />
      <p class="forme">Upišite prezime konobara</p>
      <input
        class="styleForme"
        v-model="PrezimeKonobara"
        name="Prezime korsnika"
        type="text"
        placeholder="prezime korisnika"
      />
      <button @click="DodajKonobara" class="btn">Potvrdi</button>

      <div class="raspored"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Natrag from "@/components/Natrag";
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

if(this.ImeKonobara!="" || this.PrezimeKonobara!=""){
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
        this.ImeKonobara="",
        this.PrezimeKonobara=""
      }
      else  alert("Niste unijeli ime ili prezime konobara");
      } catch (error) {
        console.log(error);

      }
    },
    
  },
  components: { Sidebar, Natrag },
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
  border-radius: 45px;
  font-size: 16px;
  border: 2px solid #731642;
  padding: 0.5rem;
  margin-bottom: 0.6rem;
  
  
}

.btn {
   padding: 0.6rem;
 min-width: 7rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;

  font-size:16px;
}

.forme {
  color: black;
  margin-bottom: 0.4rem;
}

.btn:hover {
  cursor: pointer;
  background-color: #721741d5;
}


</style>
