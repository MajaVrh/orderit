<template>
<div>
  <div v-if="podkategorije.length > 0">
    <image-frame v-if="kategorija" :imageURL="kategorija.imageURL ? kategorija.imageURL : ''" :ime="kategorija.Ime" />
    <sub-bar
      v-for="podkategorija in podkategorije"
      :key="podkategorija.id"
      :ime="podkategorija.Ime"
      :id="podkategorija.id"
      :katID="kategorija && kategorija.id"
    />
  </div>
  <div v-else>
    <image-frame v-if="kategorija" :imageURL="kategorija.imageURL ? kategorija.imageURL : ''" :ime="kategorija.Ime" />
    <pica-cards v-for="ponuda in ponude" :key="ponuda.id" :id="ponuda.id" :ime="ponuda.Naziv" :description="ponuda.Info" :cijena="ponuda.Cijena"/>
  </div>
  <order-button v-if="OrderShow"/>
 </div>
</template>

<script>
import SubBar from "@/components/SubBar";
import ImageFrame from "@/components/ImageFrame";
import { db, doc, getDoc, getDocs, collection, onSnapshot } from "@/firebase";
import PicaCards from '../components/PicaCards.vue';
import OrderButton from '../components/OrderButton.vue';
import info from './Info.vue'

export default {
  name: "GeneralView",
  components: {
    SubBar,
    ImageFrame,
    PicaCards,
    OrderButton,
    info
  },
  created() {
    this.fetchFirebaseData();
    this.fetchKategorijaData()
  },
  methods: {
    async fetchKategorijaData() {
      try {
        const id = this.$route.params.id;
        const kategorija = await getDoc(doc(db, "Kategorija", id));
        this.kategorija = kategorija.data()
        this.kategorija.id = kategorija.id
      } catch (error) {
        this.$router.push({name: 'PageNotFound'})

      }
    },
    async fetchFirebaseData() {
      const id = this.$route.params.id;
      const potkategorija = await getDocs(collection(doc(collection(db, 'Kategorija'), id), 'Potkategorija'))
      let newArr = []
      potkategorija.forEach(doc => {
        newArr.push({ id: doc.id,... doc.data()})
      })
      this.podkategorije = newArr;
      await this.PonudaExist();

    },
    async PonudaExist(){
      const id = this.$route.params.id;
      if(this.podkategorije.length > 0){
        this.OrderShow = 0;
        return;
      }
      const Stavka = await getDocs(collection(doc(collection(db, 'Kategorija'), id), 'Stavka'))
      let newArr = []
      Stavka.forEach(doc => {
        newArr.push({ id: doc.id,... doc.data()})
      })
      this.ponude = newArr;
    }
  
  },

  data() {
    return {
      podkategorije: [],
      kategorija: null,
      ponude: [],
      OrderShow: 1,
     };
   },
};
</script>

<style>
</style>