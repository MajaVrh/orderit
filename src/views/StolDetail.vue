<template>
  <div class="container">
    <sidebar />
    <router-link :to="{ name: 'Stolovi' }">  <Natrag /> </router-link>
    <div class="sredina">
       
      <h1 class="naslovStranice">{{ OznakaStola }}</h1>

      <div class="raspored">
        <VueHtml2pdf
          :show-layout="false"
          :float-layout="true"
          :enable-download="true"
          :preview-modal="true"
          :filename="`QR kod`"
          :pdf-quality="2"
          :paginate-elements-by-height="999999999999999999999"
          :manual-pagination="false"
          pdf-format="a4"
          pdf-orientation="portrait"
          pdf-content-width="800px"
          ref="html2Pdf"
        >
          <section slot="pdf-content" class="QRpdf">
            <!-- PDF Content Here -->
            <h1 class="naslovStranice">{{ OznakaStola }}</h1>

            <div class="QRkod">
              <qr-code
                class="QR"
                :text="$route.params.linkStola"
                :size="250"
                level="Q"
                color="#731642"
              >
              </qr-code>
            </div>
          </section>
        </VueHtml2pdf>

        <div class="QRkod">
          <qr-code
            class="QR"
            :text="$route.params.linkStola"
            :size="200"
            level="Q"
            color="#731642"
          >
          </qr-code>
        </div>
      </div>
      <button @click="brisanje" class="btn2">Brisanje stola</button>
      <button class="btn2" @click="generateReport">Ispis QR koda</button>
      <button v-if="!Vidljiv" @click="Vidljiv = !Vidljiv" class="btn2">
        Promjena naziva
      </button>

      <div v-if="Vidljiv">
        <p class="forme">Upišite novi naziv stola</p>
        <input
          class="styleForme"
          name="Naziv stola"
          type="text"
          v-model="NazivStola"
        />
      </div>

      <button v-if="Vidljiv" @click="PromjenaNazivaStola" class="btn">
        Potvrdi
      </button>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import Vue from "vue";
import VueQRCodeComponent from "vue-qrcode-component";
Vue.component("qr-code", VueQRCodeComponent);
import Sidebar from "@/components/Sidebar";
import Natrag from "@/components/Natrag";
import { doc, db, collection, updateDoc, getDoc, deleteDoc } from "@/firebase";

export default {
  name: "Stolovi",
  components: { Sidebar, VueHtml2pdf, Natrag },
  data() {
    return { Vidljiv: false, OznakaStola: "", NazivStola: "" };
  },
  mounted() {
    this.PrikazOznakeStola();
  },
  methods: {
    async PromjenaNazivaStola() {
      const ID = this.$route.params.id;
      const PromjenaNaziva = doc(collection(db, "Stolovi"), ID);
      try {
        await updateDoc(PromjenaNaziva, {
          oznaka: this.NazivStola,
        });
        console.log("PROMJENA NAZIVA STOLA");
        this.PrikazOznakeStola();
        this.Vidljiv = !this.Vidljiv;
      } catch (error) {
        console.log(error);
      }
    },

    async PrikazOznakeStola() {
      const ID = this.$route.params.id;
      const docRef = doc(collection(db, "Stolovi"), ID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.OznakaStola = docSnap.data().oznaka;
        console.log("PROMJENA NAZIVA STOLA");
        this.NazivStola = this.OznakaStola;
      } else {
        console.log("GREŠKA KOD PROMJENE NAZIVA STOLA");
      }
    },

    async brisanje() {
      const ID = this.$route.params.id;
      await deleteDoc(doc(db, "Stolovi", ID));
      this.$router.push({ name: "Stolovi" });
      console.log("BRISANJE");
    },

    async generateReport() {
      this.$refs.html2Pdf.generatePdf();
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
  margin: 0rem auto;
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
  padding: 2rem;
}
.QR {
  margin-bottom: -0.5rem;
}

.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 45px;
  color: #731642;
  font-weight: bold;
  margin-top: 9rem;
  margin-bottom: -1rem;
}
.forme {
  color: black;
  margin-bottom: 0.4rem;
  font-size: 16px;
}
.styleForme {
  border-radius: 30px;
  font-size: 16px;
  border: 2px solid #731642;
  padding: 0.5rem;
  margin-bottom: 0.6rem;
}
.btn {
  padding: 0.5rem;
  min-width: 6.5rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;

  font-size: 16px;
}
.btn2 {
  padding: 0.6rem;
  min-width: 10rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  margin-bottom: 0.6rem;
  font-size: 15px;
}

.btn2:hover {
  cursor: pointer;
  background-color: #721741d5;
  color: #ffffff;
}

.QRpdf {
  padding-top: 4.5rem;
  padding-left: 17.5rem;
  .naslovStranice {
    margin-bottom: 1rem;
    padding-left: 6rem;
  }
}

</style>
