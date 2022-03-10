<template>
  <div class="container">
    <sidebar />
    <router-link :to="{ name: 'Izvjestaj' }"><Natrag /></router-link>
    <div class="sredina">
      <h1 class="naslovStranice">PREGLED IZVJEŠTAJA</h1>
      <div class="raspored">
        <div class="stupac">
          <div class="red">
            <p class="tekst">Odaberte datum koji želite prikazati:</p>
          <div   @click="promjeniNatpis()">  <input
              class="date"
              type="date"
              data-date-inline-picker="true"
            
              v-model="UpisaniDatum"


            /></div>
          </div>
          <button class="pretrazi" @click="PrilagodiFormat()">Pretraži</button>
</div>
<div class="tekst2" v-if="!vidljiv">{{natpis}}</div>

          <div
            class="tablica"
            v-for="izvjestaj in izvjestaji"
            :key="izvjestaj.id"
          >
            <div
              v-if="
                new Date(izvjestaj.time).getFullYear() == godina &&
                new Date(izvjestaj.time).getMonth() + 1 == mjesec &&
                new Date(izvjestaj.time).getDate() == dan
              "
             
            >
              <RedakIzvjestajaTablice
                :stavke="izvjestaj.stavke"
                :datum="izvjestaj.time"
                :polog="izvjestaj.polog"
              />
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
moment.locale("hr");
import Sidebar from "@/components/Sidebar";
import { getDocs, collection, db, query, onSnapshot } from "@/firebase";
import RedakIzvjestajaTablice from "@/components/RedakIzvjestajaTablice";
import Natrag from "@/components/Natrag";
export default {
  name: "Izvjestaji",
  async mounted() {
    await this.getIzvjestaje();
  },
  data() {
    return {
      izvjestaji: [],
      natpis:"Molimo Vas da odaberete datum!",
      StanjeBlagajne: 0,
      vidljiv:false,
      izvjetsjiID2: [],
      UpisaniDatum: "",
      dan: "",
      mjesec: "",
      godina: "",
    };
  },

  components: { Sidebar, RedakIzvjestajaTablice, Natrag },

  methods: {
    PrilagodiFormat() {
      let g = this.UpisaniDatum.substring(0, 4);
      let m = this.UpisaniDatum.substring(5, 7);
      let d = this.UpisaniDatum.substring(8, 10);
      this.godina = g;
      this.mjesec = m;
      this.dan = d;
      console.log(this.UpisaniDatum);
      if(g>2020*1){
    this.natpis="Prikaz izvještaja za datum: "+d+"." +m+ "."+g+"." }
    },
    async getIzvjestaje() {
      const querySnapshot = await getDocs(collection(db, "Izvjestaj"));
      let newArr = [];

      querySnapshot.forEach(async (doc) => {
        let stavke = doc.data()?.stavke;

        if (stavke) {
          newArr.push({ id: doc.id, ...doc.data() });
        }
      });
      this.izvjestaji = newArr;
    },
    
promjeniNatpis(){
  this.natpis= "Molimo Vas da odaberete datum!"
  this.dan=""
  this.godina=""
  this.mjesec=""
}
,

  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.date-reset-button {opacity: 100;}


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

  padding-left: 28%;
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

  width: 90%;
}

.naslovStranice {
  font-family: "Amatic SC";
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}

.stupac {
  margin: 0;
  width: 100%;
}

.tablica {
  min-width: 17.5rem;
  width: 80%;
  color: white;
  background-color: #731642;
  border-radius: 10px;
 margin-top: 0.5rem;
}

.red {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
 
}

.PrviRed {
  background-color: #731642;
  color: white;
  width: 100%;
  min-height: 2rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
}

.celija {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-gap: 1px;
  margin: 0;
}

.siri {
  min-width: 13rem !important;
}
.manji {
  min-width: 5rem !important;
}
.najmanji {
  min-width: 2rem !important;
}

.DrugiRedUkupno {
  background-color: #b9889d;
  color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
}

.date {
  border: 1.5px solid #731642;
  border-radius: 30px;
  padding: 0.4rem;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 0.2rem;
  min-width: 7.5rem !important;
  margin-left: -1rem;
}

.pretrazi {
  padding: 0.6rem;
  min-width: 7rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  font-size: 16px;
  margin-top: 0.5rem;
 margin-bottom: 0.75rem;
}

.tekst {
  font-size: 18px;
  color: black;
  
}

.pretrazi:hover {
  cursor: pointer;
  background-color: #721741d5;
}
.tekst2{color: black;
font-size: 18px;
margin-bottom: 0.5rem;
}
</style>
