<template>
  <div class="kartica">
    <h2>{{ NarudzbaStola.oznakaStola }}</h2>
    <div class="linija"></div>
    <div class="poravnanjeL">
      <div class="marg">Šifra: {{ NarudzbaStola.id }}</div>
      <div class="marg">Vrijeme narudžbe: {{ datum }}</div>
    </div>
    <div class="stupci">
      <div class="Naz"><b> Naziv </b></div>
      <div class="Kol"><b>Količina </b></div>
      <div class="Cije"><b>Cijena</b></div>
    </div>

    <div class="scr">
 
       <StavkaNarudzbe v-for="StavkaR in StavkeRacuna" :key="StavkaR.id" :Naziv="StavkaR.ime" :Kolicina="StavkaR.kolicina" :Cijena="StavkaR.cijena"/>
        
    </div>
    
    <div class="linija"></div>

    <div class="stavka">
      <div class="Ukupno"><b> Ukupno </b></div>

      <div class="UkupnaCijena">
        <b> {{ NarudzbaStola.ukupnaCijena }} kn</b>
      </div>
    </div>
    <div class="buttonRacun">
      <button class="IzdajRacun">Izdaj račun</button>
    </div>
  </div>
</template>
<script>
import { db, collection, query, onSnapshot, doc  } from "@/firebase";
import moment from "moment";
import StavkaNarudzbe from './StavkaNarudzba.vue'
export default {
  name: "KarticaNarudzbe",
  components: {StavkaNarudzbe,},
props:["NarudzbaStola"],

  data() {
    return { datum: "", StavkeRacuna: [] };
  },

  mounted() {
    this.postedFromNow(), this.prikaziStavkeRacuna();
  },
  methods: {
    postedFromNow() {
      this.datum = moment(this.NarudzbaStola.createdAt).format("DD.MM.YYYY hh:mm");
    },
     async prikaziStavkeRacuna() {
      const q = query(collection(doc(collection(db, "Narudzbe"), this.NarudzbaStola.id),"Stavke"));
      try{
      onSnapshot(q, (querySnapshot) => {
        const CitajStavke = [];
        querySnapshot.forEach((doc) => {
          CitajStavke.push({ id: doc.id, ...doc.data() });
        });
        this.StavkeRacuna = CitajStavke;
        console.log("Stavke racuna:" ,this.StavkeRacuna)
      });}catch (error) {
        console.log("Učitavanje stavki računa nije uspijelo");
      }
    },
   
  },
};
</script>

<style scoped>
.kartica {
  min-width: 15rem;
  min-height: 25rem;
  max-width: 15rem;
  max-height: 25rem;
  background-color: #731642;
  border-radius: 10px;
  color: white;
  padding: 1.5rem;
  font-size: 14px;
  position: relative;
}

.linija {
  background-color: white;
  width: 100%;
  height: 1.5px;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.linija2 {
  background-color: rgba(255, 255, 255, 0.281);
  width: 95%;
  height: 0.5px;

  margin-top: 0.5rem;
}

.stupci {
  display: flex;
  flex-direction: row;
  gap: 2.55rem;
  justify-content: space-between;
}

.poravnanjeL {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.marg {
  margin-bottom: 1rem;
}

.stavka {
  display: flex;
  margin-top: 0.5rem;
}
.Cijena {
  display: flex;

  width: 40%;
  justify-content: flex-end;
}

.Naziv {
  display: flex;

  width: 40%;
  justify-content: flex-start;
}

.Kolicina {
  display: flex;
  justify-content: center;

  width: 15%;
}
.Ukupno {
  display: flex;

  width: 50%;
  justify-content: flex-start;
  font-size: 16px;
}
.UkupnaCijena {
  display: flex;
  font-size: 16px;
  width: 50%;
  justify-content: flex-end;
}

.IzdajRacun {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #731642;
  border-radius: 7px;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border: none;
  font-weight: bold;
  width: 7rem;
  position: relative;
  margin-top: 1.5rem;
}
.IzdajRacun:hover {
  background-color: #aa6b88e3;
  color: #ffffff;
}
.buttonRacun {
  display: flex;
  width: 100%;
  margin-left: -1.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: absolute;
  bottom: 0px;
}

.scr {
  height: 10rem;
  margin-right: -1.25rem;
}
div.scr {
  overflow-y: scroll;
}

.scr::-webkit-scrollbar {
  width: 10px;
}

.scr::-webkit-scrollbar-track {
  background: #aa6b88e3;
  border-radius: 10px;
}

.scr::-webkit-scrollbar-thumb {
  background: #eeecec;

  border-radius: 10px;
}
</style>
