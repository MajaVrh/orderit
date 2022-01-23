<template>
  <div>
    <image-frame v-if="potkategorija" :imageURL="potkategorija.imageURL" :ime="potkategorija.Ime" />
    <pica-cards
      v-for="proizvod in proizvodi"
      :key="proizvod.id"
      :id="proizvod.id"
      :description="proizvod.Info"
      :ime="proizvod.Naziv"
      :cijena="proizvod.Cijena"
    />
    <order-button />
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame";
import PicaCards from "@/components/PicaCards.vue";
import OrderButton from "@/components/OrderButton.vue";
import { db, doc, getDoc, getDocs, collection } from "@/firebase";

export default {
  name: "Jakaalkoholnapića",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,
  },
  mounted() {
      this.fetchDataPotkategorija();
      this.fetchPonuda()
  },
  methods: {
    async fetchDataPotkategorija(){
        const id = this.$route.params.id;
        const katID = this.$route.params.katID;
        
        const potkategorija = await getDoc(doc(collection(doc(collection(db, 'Kategorija'), katID), 'Potkategorija'), id));
        this.potkategorija = potkategorija.data()
    },
    async fetchPonuda(){
        const id = this.$route.params.id;
        const katID = this.$route.params.katID;
        
        const ponuda = await getDocs(collection(doc(collection(doc(collection(db, 'Kategorija'), katID), 'Potkategorija'), id), 'Stavke'));
        let newArr = []
        ponuda.forEach(doc => {
          newArr.push({id: doc.id,... doc.data()})
        })
        this.proizvodi = newArr;
    }
  },

  data() {
    return {
      proizvodi: [],
      potkategorija: null,
      path: "https://picsum.photos/100",
      title: "Jaka alkoholna pića",
    };
  },
};


</script>

<style>
</style>

