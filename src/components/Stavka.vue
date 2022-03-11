<template>
  <div class="StavkaSve">
    <div class="Stavka">
      <div class="lijevo">
        <div class="buttoni">
          <button class="ButtonBrisanje" @click="brisanjeStavke">
            <i class="fas fa-times ikona"></i>
          </button>
          <i class="fas fa-pen " @click="VidljivUredi=!VidljivUredi"  ></i>
        </div>

        {{ Stavke.Naziv }}
      </div>
      <div class="desno">
        {{ Stavke.Cijena }} kn
        <i class="fas fa-info-circle" @click="Vidljiv = !Vidljiv"></i>
        <br />
      </div>
    </div>
    <div v-if="Vidljiv">
      {{ Stavke.Info }}
    </div>
    <div v-if="VidljivUredi">
       <input
        class="UpisiStavku PrviInput"
         v-model="NoviNazivStavke"
        v-if="VidljivUredi"
        placeholder="Novi naziv stavke"
        type="text"
      />

      <input
        class="UpisiStavku"
        v-model="NovaCijenaStavke"
        v-if="VidljivUredi"
        placeholder="Nova cijena stavke"
        type="text"
      />

      <textarea
        class="UpisiStavkuInfo"
        v-model="NoveInfoStavke"
        v-if="VidljivUredi"
        placeholder="Nove informacije o stavci"
        type="text"
      />
      <div class="buttonipotvrdi">

        
        
       <div v-if="VidljivUredi"  @click="UrediStavku"><potvrdi /></div>
       <div v-if="VidljivUredi"  @click="VidljivUredi=!VidljivUredi"><odustani /></div>
    
      </div>
   
     
    </div>
  </div>
</template>

<script>
import { doc, deleteDoc, db, collection, getDoc,updateDoc } from "@/firebase";
import potvrdi from './potvrdi.vue';
import odustani from './odustani.vue';
export default {
  components: { potvrdi, odustani },
  data() {
    return {
      Vidljiv: false,
      VidljivUredi: false,
      NovaCijenaStavke: this.Stavke.Cijena,
      NoviNazivStavke: this.Stavke.Naziv,
      NoveInfoStavke: this.Stavke.Info
    };
  },
  name: "Stavka",
  props: ["Stavke", "idStavka"],
  methods: 
  {    async UrediStavku() {
     const ID = this.$route.params.id;
       const StavkaDocRef = doc(collection(doc(collection(db, 'Kategorija'),ID),"Stavka"),this.idStavka)
      
           
      await updateDoc(StavkaDocRef
      ,
        {
          Naziv: this.NoviNazivStavke,
          Cijena: this.NovaCijenaStavke,
          Info: this.NoveInfoStavke,
        }
      );
      console.log("PROMJENA NA STAVCI");
      this.VidljivUredi = !this.VidljivUredi;
    },
    async brisanjeStavke() {
      const ID = this.$route.params.id;
      await deleteDoc(
        doc(collection(doc(db, "Kategorija", ID), "Stavka"), this.idStavka)
      );
      console.log("BRISANJE STAVKE");
    },
  },
};
</script>
<style scoped>
.Stavka {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.lijevo {
  padding-right: 3rem;
  margin-left: 1rem;
  display: inline-flex;
  width: 70%;
}
.desno {
  display: flex;
  justify-content:flex-end;
  align-items: flex-end;
  margin-right: 1rem;
  min-width: 30%;
}

i {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.ButtonBrisanje {
  border-radius: 50%;
  z-index: 9999;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.ikona:hover {
  cursor: pointer;
}
.StavkaSve {
  display: flex;
  flex-direction: column;
  background-color: #731642;
  min-width: 24rem;
  max-width: 24rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 15px;
  margin-top: 1rem;
  font-size: 14px;
  color: white;
  font-family: "Marcellus", serif;
}

.buttonipotvrdi{display: flex;
flex-direction: row;
justify-content: center;
gap: 0.3rem}
.UpisiStavku {
  margin: 0.3rem;
  width: 80%;
  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
}

.UpisiStavkuInfo {
  margin: 0.3rem;

  border-radius: 7px;
  font-size: 14px;
  border: 1.5px solid #731642;
  padding: 0.2rem;
  height: 4rem;
  min-height: 4rem;
  min-width: 80%;
  text-align: start;
  padding-top: -0.3rem;
  max-width: 80%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.PrviInput{margin-top: 1rem;}
/*
.jedan{ /border-radius: 13px 2px 2px 13px;;
}
.dva{border-radius: 2px 13px 13px 2px;
}*/

i{  cursor: pointer;} 
</style>
