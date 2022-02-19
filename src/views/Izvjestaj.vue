<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">IZVJEŠTAJ</h1>
      <div class="raspored">
        <div class="red">
          <div class="IzvjestajGumb">Zatvaranje radnog dana</div>
          <div class="IzvjestajGumb">Pregled izvještaja</div>
        </div>
     
        <div class="tablica">
          <div class="PrviRed">
          <div class="celija najmanji">#</div>
          <div class="celija">Naziv artikla</div>
          <div class="celija manji">Količina</div>
          <div class="celija manji">Cijena</div>
          <div class="celija manji">Ukupno</div>
          </div>
          <RedakTablice v-for="S in NarudzbaIDstavke"  :key="S.id"
            :InfoNarudzbe="S"
          />
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import RedakTablice from "@/components/RedakTablice";
import { db, collection, query, onSnapshot} from "@/firebase";
export default {
  name: "Izvjestaj",
  components: { Sidebar,RedakTablice},
    data(){
return{
  NarudzbaIDstavke: [],
}
},

mounted(){
  this.DohvatiNarudzbe() 
},
  
methods:{
 



      async DohvatiNarudzbe() {
      const q = query(collection(db, "Narudzbe"));
      try{
      onSnapshot(q, (querySnapshot) => {
        const CitajID= [];
        querySnapshot.forEach((doc) => {
          if(doc.data().jePlaceno){ CitajID.push({ id: doc.id, ...doc.data() });}
         
        });
        this.NarudzbaIDstavke = CitajID;
        console.log(this.stavke)
      });}catch (error) {
        console.log("Učitavanje narudžba nije uspijelo");
      }
    },

}
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
  margin-left: 3rem;
  margin-right: 3rem;
  gap: 2rem;
    
  width: 90%;

}

.naslovStranice {
  font-family: "Amatic SC";
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}

.IzvjestajGumb {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #731642;
  color: #ffffff;
  border-radius: 7px;
  padding: 1rem;
  border: none;
  font-size: 16px;
  min-height: 2.5rem;
  max-width: 9rem;
  min-width: 9rem;
  outline: none;
  cursor: pointer;
}

.IzvjestajGumb:hover {
  background-color: #721741d5;
}

.tablica {
  height: 100%;
  min-width: 17.5rem;
  width: 100%;

  background-color:#ceabbb;
  border-radius: 10px;
}

.red {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
}

.PrviRed{background-color: #731642;
color: white;
width: 100%;
height: 2rem;
border-top-left-radius: 10px;
border-top-right-radius : 10px;
display: grid;
grid-template-columns: 0.2fr 1fr 0.4fr 0.4fr 0.4fr;
justify-content: center;
align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
}

.celija{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-left:1px rgb(255, 255, 255) solid;
  grid-gap: 1px;
  margin: 0;}

  .siri{min-width: 13rem !important;}
  .manji{min-width: 5rem !important;}
  .najmanji{min-width: 2rem !important;}



</style>
