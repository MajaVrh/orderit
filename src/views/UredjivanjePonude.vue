<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">UREĐIVANJE PONUDE</h1>
      <div class="raspored">   <DodavanjeKategorije />

       <Kategorija v-for="K in KarticeKategorija" :key="K.id" :id="K.id" :info="K" />
      </div>
     
     
    </div>
  </div>
</template>
<script>

import Sidebar from '@/components/Sidebar'
import Kategorija from '@/components/Kategorija'
import store from "@/store/index"
import DodavanjeKategorije from "@/components/DodavanjeKategorije"
import { db, collection, query, onSnapshot,   } from "@/firebase";

export default { 
  name: "UredjivanjePonude",
  data() {
    
    return {
      store,
       KarticeKategorija:[]
    };
  },
    mounted() {
    //DAJE TOČNO TRENUTAK KAD DA SE DATOTRKA PRIKAŽE NA ERKRANU
    this.PrikazKategorija();
  },
    methods: {
    async PrikazKategorija() {
      const q = query(collection(db, "Kategorija"));
      onSnapshot(q, (querySnapshot) => {
        const KategorijaIme = [];
        querySnapshot.forEach((doc) => {
          KategorijaIme.push({ id: doc.id, ...doc.data() });
        });
        this.KarticeKategorija = KategorijaIme;
      });
    },
    
  },
  components: {Sidebar, Kategorija, DodavanjeKategorije,}
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
  margin-left:3rem ;
  margin-right: 3rem;
  gap: 2rem;

}


.naslovStranice {
  font-family: "Amatic SC";
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}


</style>