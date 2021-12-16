<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
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
           <button class="btn">Potvrdi</button>
          
   
      <div class="raspored">
        
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";


export default {
  name: "Konobari",
  components: { Sidebar},
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
  margin-bottom:1rem ;
}



.styleForme {
  border-radius: 30px;
  font-size: 16px;
  border: 2px solid #731642;
  padding: 0.7rem;
  margin-bottom: 1rem;
  margin-top:rem ;}


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

.forme{color: black;
margin-bottom:0.4rem ;}

</style>
