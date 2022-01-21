<template>
  <div>
    <image-frame-info />
    <div class="WrapperInfo">
      <p class="title">Central Perk Coffe Shop</p>
      <div class="align">
        <i class="fas fa-map-marker-alt"></i>
        <p>Lokacija</p>
      </div>
      <p>{{ adr }}</p>
      <div class="align">
        <i class="fas fa-phone"></i>
        <p>Kontakt</p>
      </div>
      <p>{{ br }}</p>
      <div class="align">
        <i class="fas fa-clock"></i>
        <p>RADNO VRIJEME</p>
      </div>

      <div class="wrapper-info">
        <div class="left">
          <span>PON:</span>
          <span>UTO:</span>
          <span>SRI:</span>
          <span>CET:</span>
          <span>PET:</span>
          <span>SUB:</span>
          <span>NED:</span>

        </div>

        <div class="right">
          <p class="align-time">
            {{pon}} <br>
            {{uto}} <br>
            {{sri}} <br>
            {{cet}} <br>
            {{pet}} <br>
            {{sub}} <br>
            {{ned}} 
             
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, doc, getDoc, getDocs, collection, onSnapshot } from "@/firebase";
import ImageFrameInfo from '../components/ImageFrameInfo.vue';

export default {
  name: "Info",
  components: {
    ImageFrameInfo,
  },
  created(){
    this.UcitavanjeRadnogVremena();
    this.UcitavanjeKontakta();
    this.UcitavanjeAdrese();
    },
   methods: {
    async UcitavanjeRadnogVremena() {
      onSnapshot(doc(db, "Info", "radnoVrijeme"), (doc) => {
        this.pon = doc.data().ponedjeljak;
        this.uto = doc.data().utorak;
        this.sri = doc.data().srijeda;
        this.cet = doc.data().cetvrtak;
        this.pet = doc.data().petak;
        this.sub = doc.data().subota;
        this.ned = doc.data().nedjelja;
        console.log("Current data: ", doc.data());
      });
    },
    async UcitavanjeKontakta() {
      onSnapshot(doc(db, "Info", "broj"), (doc) => {
        this.br = doc.data().broj;

        console.log("Current data: ", doc.data());
      });
    },

      async UcitavanjeAdrese() {
      onSnapshot(doc(db, "Info", "adresa"), (doc) => {
        this.adr = doc.data().adresa;

        console.log("Current data: ", doc.data());
      });
    },
   },
  data() {
    return {
      pon: "",
      uto: "",
      sri: "",
      cet: "",
      pet: "",
      sub: "",
      ned: "",
      br: "",
      adr: "",
    };
    
  },
};
</script>

<style scoped>
.WrapperInfo {
  background-color: rgba(0, 0, 0, 0.65);
  padding: 2rem 1rem;
  font-family: "Marcellus", serif;
  color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.align > i,
.align > span {
  margin-right: 1rem;
}
.align {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

.wrapper-info {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
