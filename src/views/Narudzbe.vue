<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">NARUDŽBE</h1>
      <div class="raspored">
        <KarticaNarudzbe v-for="KN in Narudzba" :key="KN.id" :NarudzbaStola="KN" />
       
    

      
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import KarticaNarudzbe from '@/components/KarticaNarudzbe'
import { db, collection, query, onSnapshot,   } from "@/firebase";
export default {
  name: "Narudzbe",
  data() {
    return {
      Narudzba:[],
    };
  },
  mounted() {this.PrikazNarudzbe()},
  
  methods: {
  async PrikazNarudzbe() {
      const q = query(collection(db, "Narudzbe"));
      try{
      onSnapshot(q, (querySnapshot) => {
        const CitajNarudzbu = [];
        querySnapshot.forEach((doc) => {
          if(!doc.data().jePlaceno){ CitajNarudzbu.push({ id: doc.id, ...doc.data() });}
         
        });
        this.Narudzba = CitajNarudzbu;
        console.log(this.Narudzba)
      });}catch (error) {
        console.log("Učitavanje narudžba nije uspijelo");
      }
    },

  },
  components: { KarticaNarudzbe,Sidebar },
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
  width: 130vh;

  padding-left: 25%;
}

.raspored {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  gap: 2rem;
}
.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}
</style>
