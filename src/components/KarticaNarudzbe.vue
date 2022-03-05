<template>
  <div>
    <div class="kartica">
      <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :filename="`Račun_${NarudzbaStola.id}`"
        :pdf-quality="2"
        :paginate-elements-by-height="999999999999999999999"
        :manual-pagination="false"
        pdf-format="a6"
        pdf-orientation="portrait"
        pdf-content-width="800px"
        ref="html2Pdf"
      >
        <section slot="pdf-content" class="RacunPDF">
          <!-- PDF Content Here -->

          <h2>{{ NarudzbaStola.oznakaStola }}</h2>
          <div class="linija"></div>
          <div class="poravnanjeL">
            <div class="marg">Šifra: {{ NarudzbaStola.id }}</div>
            <div class="marg">Vrijeme narudžbe: {{ datum }}</div>
            <div>Konobar: {{konobar}}</div>
            <br>
          </div>
          <div class="stupci">
            <div class="Naz"><b> Naziv </b></div>
            <div class="Kol"><b>Količina </b></div>
            <div class="Cije"><b>Cijena</b></div>
          </div>

       
            <StavkaNarudzbe
              v-for="StavkaR in StavkeRacuna"
              :key="StavkaR.id"
              :Naziv="StavkaR.ime"
              :Kolicina="StavkaR.kolicina"
              :Cijena="StavkaR.cijena"
            />
            
        

          <div class="linija"></div>

          <div class="stavka">
            <div class="Ukupno"><b> Ukupno </b></div>
           
            <div class="UkupnaCijena">
              
              <b> {{ NarudzbaStola.ukupnaCijena }} kn</b>
            </div>
          </div>
           <div>U cijenu je uračunat PDV</div>
          <br>
           <div>VL. Domink Ružić</div>
           <br>
           <div> <b>COFFE SHOP CENTRAL PERK </b> </div>
      
        </section>
      </VueHtml2pdf>
      <section slot="pdf-content">
        <!-- PDF Content Here -->

        <h2>{{ NarudzbaStola.oznakaStola }}</h2>
        <div class="linija"></div>
        <div class="poravnanjeL">
          <div class="marg"><b> Šifra:</b> {{ NarudzbaStola.id }}</div>
          <div class="marg"><b> Vrijeme narudžbe: </b> {{ datum }}</div>
        </div>
        <div class="stupci">
          <div class="Naz"><b> Naziv </b></div>
          <div class="Kol"><b>Količina </b></div>
          <div class="Cije"><b>Cijena</b></div>
        </div>

        <div class="scr">
          <StavkaNarudzbe
            v-for="StavkaR in StavkeRacuna"
            :key="StavkaR.id"
            :Naziv="StavkaR.ime"
            :Kolicina="StavkaR.kolicina"
            :Cijena="StavkaR.cijena"
          />
        </div>

        <div class="linija"></div>

        <div class="stavka">
          <div class="Ukupno"><b> Ukupno </b></div>

          <div class="UkupnaCijena">
            <b> {{ NarudzbaStola.ukupnaCijena }} kn</b>
          </div>
        </div>
      </section>
      <div class="buttonRacun">
        <button class="IzdajRacun" @click="generateReport" >Izdaj račun</button>
      </div>
    </div>
  </div>
</template>

<script>

import VueHtml2pdf from "vue-html2pdf";

import { db, collection, query, onSnapshot, doc, updateDoc } from "@/firebase";
import moment from "moment";
import StavkaNarudzbe from "./StavkaNarudzba.vue";
import { mapGetters } from "vuex"

export default {
  name: "KarticaNarudzbe",
  components: { StavkaNarudzbe, VueHtml2pdf },
  props: ["NarudzbaStola"],

  data() {
    return { datum: "", StavkeRacuna: [] };
  },
  computed: {
    ...mapGetters({konobar: "konobar"}), // konobarL-naziv  ----- getter hvata podatke iz index.js-a ( store ), string predstavlja ime funckije u store-u
  },
  mounted() {
    this.postedFromNow(),  this.prikaziStavkeNarudzbe();
    console.log(this.konobar)
  },
  methods: {
    postedFromNow() {
      this.datum = moment(this.NarudzbaStola.createdAt).format(
        "DD.MM.YYYY hh:mm"
      );
    
    },
    async prikaziStavkeNarudzbe() {
      const q = query(
        collection(
          doc(collection(db, "Narudzbe"), this.NarudzbaStola.id),
          "Stavke"
        )
      );
      try {
        onSnapshot(q, (querySnapshot) => {
          const CitajStavke = [];
          querySnapshot.forEach((doc) => {
            CitajStavke.push({ id: doc.id, ...doc.data() });
          });
          this.StavkeRacuna = CitajStavke;
          console.log("Stavke racuna:", this.StavkeRacuna);
        });
      } catch (error) {
        console.log("Učitavanje stavki računa nije uspijelo");
      }
    },
    async generateReport() {
      this.$refs.html2Pdf.generatePdf();    
          //tu je pozovemo
        
          await updateDoc(doc(db, "Narudzbe",this.NarudzbaStola.id ), {
            
          jePlaceno:true
        });
    },

 
  },
};
</script>

<style scoped lang="scss">
/* IZBRIŠI NEPOTREBAN CSS*/
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
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
.IzdajRacun:hover {
  background-color: #aa6b88e3;
    cursor: pointer;
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
  background: #721741d5;
  border-radius: 10px;
}

.scr::-webkit-scrollbar-thumb {
  background: #eeecec;

  border-radius: 10px;
}

.RacunPDF {

  padding-right:28rem ;
  padding-left: 3rem;

  .linija {
    background-color: black;
  }
}
</style>
