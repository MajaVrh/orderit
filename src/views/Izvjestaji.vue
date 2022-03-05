<template>
  <div class="container">
    <sidebar />
    <router-link :to="{ name: 'Izvjestaj' }"><Natrag /></router-link>
    <div class="sredina">
      <h1 class="naslovStranice">PREGLED IZVJEŠTAJA</h1>
      <div class="raspored">
        <div class="tablica" v-for="izvjestaj in izvjestaji" :key="izvjestaj.id">
              <RedakIzvjestajaTablice :stavke="izvjestaj.stavke" :datum="izvjestaj.time" :polog="izvjestaj.polog"/>
        </div>

   
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { getDocs, collection, db ,query, onSnapshot} from "@/firebase";
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
   
      time2: Number,
      StanjeBlagajne: 0,
      datum: Number,
      izvjetsjiID2:[]
    };
  },

  components: { Sidebar, RedakIzvjestajaTablice, Natrag },
  methods: {
    FiltrirajDatum() {},

    async DohvatiDatum() {
      let dateObj = new Date(this.time2);
      let month = String(dateObj.getMonth() + 1).padStart(2, "0");
      let day = String(dateObj.getDate()).padStart(2, "0");
      let year = dateObj.getFullYear();
      this.datum = day + "." + month + "." + year + ".";
    },

    async getIzvjestaje() {
      const querySnapshot = await getDocs(collection(db, "Izvjestaj"));
      let newArr = [];

      querySnapshot.forEach(async (doc) => {
        let stavke = doc.data()?.stavke;
        if (stavke) {
          newArr.push({id: doc.id, ...doc.data()});
       
        }
      });
      this.izvjestaji = newArr;
      this.DohvatiDatum();
    },

  },
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

.tablica,
.tablicaUkupno {
  min-width: 17.5rem;
  width: 100%;
  color: white;
  background-color: #731642;
  border-radius: 10px;
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


</style>
