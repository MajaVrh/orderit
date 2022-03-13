<template>
  <div class="container">
    <sidebar />
           <div class="PozicijaNatrag"> <router-link :to="{ name: 'Stolovi' }"><Natrag/> </router-link></div>
    <div class="sredina">
     
      <h1 class="podnaslov">DODAVANJE STOLA</h1>
    
      <p class="forme">Upišite naziv stola</p>
      <input
        class="styleForme"
        v-model="OznakaStola"
        name="Prezime korsnika"
        type="text"
        placeholder="Naziv stola"
      />
            <p class="opis">Klikom na "Potvrdi" kreira se novi stol i njegov QR kod</p>
      <button @click="DodajStol" class="btn">Potvrdi</button>

      <div class="raspored"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Natrag from "@/components/Natrag";
import { db, collection, addDoc } from "@/firebase";;

export default {
  name: "Konobari",
  data: function () {
    return {
     OznakaStola: ""
    };
  },
  methods: {
     async DodajStol() {
      try {

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "Stolovi"), {
          oznaka: this.OznakaStola,
        });
        this.Vidljiv = !this.Vidljiv;
        this.OznakaStola = "";
         alert("Dodan je stol");
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

.opis {
  color: black;
  margin-bottom: 0.8rem;
  font-size: 14px;


}

.btn:hover {
  cursor: pointer;
  background-color: #721741d5;
}


</style>
