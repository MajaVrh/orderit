<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">IZVJEŠTAJ</h1>
      <div class="raspored">
        <div class="red">
          <div v-if="!Vidljiv" @click="Vidljiv = !Vidljiv" class="IzvjestajGumb">
            Polog kase
          </div>
          <div v-if="Vidljiv" class="IzvjestajGumb2 GumbPolog">
            Polog u kasi:
            <input
              class="UpisiPolog"
              v-model="Polog"
              placeholder="Iznos pologa"
              type="number"
            />
            <div class="sredinaGumba" @click="PostaviPolog()"><potvrdi /></div>
          </div>
          <div  @click="SpremiDan(), generateReport() " class="IzvjestajGumb">Zatvaranje radnog dana</div>
           <router-link :to="{ name: 'Izvjestaji' }"><div class="IzvjestajGumb">Pregled izvještaja</div></router-link>
          
   
        </div>

        <div class="tablica">
          <div class="PrviRed">
            <div class="celija">Naziv artikla</div>
            <div class="celija manji">Količina</div>
            <div class="celija manji">Cijena</div>
            <div class="celija manji">Ukupno</div>
          </div>

          <RedakTablice />
          <div class="ZadnjiRed">Izvještaj dana: {{ datum }}</div>
        </div>




        <div class="tablicaUkupno">
          <div class="PrviRedUkupno">
            <div class="stupac celija">Polog</div>
            <div class="stupac celija">Plaćeno gotovinom</div>
            <div class="stupac celija">U kasi</div>
          </div>
          <div class="DrugiRedUkupno">
            <div class="stupac celija">{{ Polog }} kn</div>
            <div class="stupac celija">{{ kasa }}</div>
            <div class="stupac celija">{{ uKasi }}</div>
          </div>
        </div>

         <VueHtml2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :filename="`Izvještaj dana`"
          :pdf-quality="2"
          :paginate-elements-by-height="999999999999999999999"
          :manual-pagination="false"
          pdf-format="a4"
          pdf-orientation="portrait"
          pdf-content-width="800px"
          ref="html2Pdf"
        >
          <section slot="pdf-content" class="pdf">
            <!-- PDF Content Here -->
           
        <div class="tablica">
          <div class="PrviRed">
            <div class="celija">Naziv artikla</div>
            <div class="celija manji">Količina</div>
            <div class="celija manji">Cijena</div>
            <div class="celija manji">Ukupno</div>
          </div>

          <RedakTablice />
          <div class="ZadnjiRed">Izvještaj dana: {{ datum }}</div>
        </div>




        <div class="tablicaUkupno">
          <div class="PrviRedUkupno">
            <div class="stupac celija">Polog</div>
            <div class="stupac celija">Plaćeno gotovinom</div>
            <div class="stupac celija">U kasi</div>
          </div>
          <div class="DrugiRedUkupno">
            <div class="stupac celija">{{ Polog }} kn</div>
            <div class="stupac celija">{{ kasa }}</div>
            <div class="stupac celija">{{ uKasi }}</div>
          </div>
        </div>
          </section>
        </VueHtml2pdf>
      </div>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import { db,doc, onSnapshot,updateDoc } from "@/firebase";
import potvrdi from "@/components/potvrdi";
import Sidebar from "@/components/Sidebar";
import RedakTablice from "@/components/RedakTablice";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Izvjestaj",
  components: { Sidebar, RedakTablice, potvrdi, VueHtml2pdf },
  data() {
    return {
      NarudzbaIDstavke: [],
      datum: "",
      Vidljiv: false,
      Polog: 0,
      uKasi: 0,
      OtvoriDan: false,

    };
  },

  async mounted() {
    this.DohvatiDatum();
    await this.dohvatiStavke();
    this.UcitajPolog();

  
  },
  computed: {
    ...mapGetters({ kasa: "kasa" }), // => this.izvjestaj
  },
  methods: {
  async generateReport() {
      this.$refs.html2Pdf.generatePdf();
      setTimeout(() => {
        this.$router.go(0);
      }, 1000)
    },


    async DohvatiDatum() {
      let dateObj = new Date();
      let month = String(dateObj.getMonth() + 1).padStart(2, "0");
      let day = String(dateObj.getDate()).padStart(2, "0");
      let year = dateObj.getFullYear();
      this.datum = day + "." + month + "." + year + ".";
    },
    ...mapActions({ dohvatiStavke: "dohvatiStavke" ,SpremiDan:"SpremiDan"}),

    async PostaviPolog() {
      try {
        // Add a new document with a generated id.
        const docRef = doc(db, "Polog","PologKase");
        await updateDoc(docRef, { PologKase: this.Polog })
        this.Vidljiv = !this.Vidljiv;
      } catch (error) {
        console.log(error);
      }
    },
      async UcitajPolog() {
      onSnapshot(doc(db, "Polog", "PologKase"), (doc) => {
        this.Polog = doc.data().PologKase;
        
      setTimeout(() => {
this.uKasi=this.Polog*1+this.kasa*1
}, 1000);
     
      });

      
    },

   
  },
};
</script>

<style scoped lang="scss">
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

.IzvjestajGumb,
.IzvjestajGumb2 {
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
  gap: 0.2rem;
   
 
}

a{  text-decoration: none;}

.IzvjestajGumb:hover {
  background-color: #721741d5;
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

.ZadnjiRed {
  padding-top: 0.4rem;
  font-size: 1px;
  height: 1.7rem;
  font-size: 16px;
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

.PrviRedUkupno {
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  min-height: 2rem;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
}

.UpisiPolog {
  margin: 0.3rem;
  margin: 0.3rem;
  width: 88%;
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
}
.sredinaGumba {
  display: flex;
  justify-content: center;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.Hover :hover {
  background-color: #731642;
}

.pdf {

  padding-top: 5rem;
  margin: auto;
display: flex;
justify-content: center !important;
flex-direction: column;
align-items: center;
width: 80%;
.ZadnjiRed{display: flex;
justify-content: center;

}
  .tablica , .tablicaUkupno{
    margin-bottom: 1rem;
  
  }
}
</style>
