<template>
  <div class="home" v-if="table">
    <main-bars
      v-for="kategorija in kategorije"
      :key="kategorija.id"
      :id="kategorija.id"
      :IsLeft="kategorije.indexOf(kategorija) % 2 == 0"
      :imageURL="kategorija.imageURL"
      :naziv="kategorija.Ime"
    />
    <info-bar :IsLeft="kategorije.length % 2 == 0"/>

  </div>
  <div class="notLoading" v-else>
    <p> Stol ne postoji. </p>
    <img src="@/assets/notpass.jpg" alt="">
  </div>
</template>

<script>
import MainBars from "@/components/MainBar";
import InfoBar from "@/components/infoBar";
import { db, collection, query, onSnapshot} from "@/firebase";
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Home",
  components: {
    MainBars,
    InfoBar,
  },
  created() {
    this.PrikazKategorija();
  },
  computed: {
    ...mapGetters({table: 'getTable'})
  },
  methods: {
    ...mapMutations({setTable: 'setTable'}),
    async PrikazKategorija() {
      const q = query(collection(db, "Kategorija"));
      onSnapshot(q, (querySnapshot) => {
        const KategorijaIme = [];
        querySnapshot.forEach((doc) => {
          KategorijaIme.push({ id: doc.id, ...doc.data() });
        });
        this.kategorije = KategorijaIme;
        this.katLen = this.kategorije.length;
      });
    },
   
  
  },
   

  data() {
    return {
      kategorije: [],
      
    };
  },
};
</script>

<style scoped>
  .notLoading>p{
    color: white;
    font-size: 5rem;
    font-family: "Amatic SC", cursive;
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 2rem;

  }
  .notLoading{
    display: grid;
    height: 100%;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .notLoading>img{
    max-width: 100%;
    max-height: 100vh;
    margin: auto;
    border: white 4px solid;
  }
</style>
