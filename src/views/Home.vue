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
    <!-- <main-bars
      naziv="Info"
      imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"
      :isLeft="kategorije.lenght + (1 % 2) == 0"
      :isInfo="true"
      id="info"
    /> -->
  </div>
  <div style="color:white; font-size:2rem;" v-else>
    Stol ne postoji.
  </div>
</template>

<script>
import MainBars from "@/components/MainBar";
import { db, collection, query, onSnapshot, getDocs  } from "@/firebase";
import { mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    MainBars,
  },
  created() {
    this.PrikazKategorija();
  },
  computed: {
    ...mapGetters({table: 'getTable'})
  },
  methods: {

    async PrikazKategorija() {
      const q = query(collection(db, "Kategorija"));
      onSnapshot(q, (querySnapshot) => {
        const KategorijaIme = [];
        querySnapshot.forEach((doc) => {
          KategorijaIme.push({ id: doc.id, ...doc.data() });
        });
        this.kategorije = KategorijaIme;
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
