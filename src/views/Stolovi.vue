<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">STOLOVI</h1>

      <div class="raspored">
        <dodavanjeStola />
        <Stol v-for="S in KarticaStol" :key="S.id" :id="S.id" :Stol="S"  />

      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Stol from "@/components/Stol";
import DodavanjeStola from "@/components/DodavanjeStola";
import { db, collection, query, onSnapshot,   } from "@/firebase";

export default {
  name: "Stolovi",
  data: function () {
    return {
      KarticaStol: [],
      ImeKonobara: "",
      PrezimeKonobara: "",
     
    };
  },
  mounted() {
    //DAJE TOČNO TRENUTAK KAD DA SE DATOTRKA PRIKAŽE NA ERKRANU
    this.PrikazStolova();
  },
  methods: {
    async PrikazStolova() {
      const q = query(collection(db, "Stolovi"));
      onSnapshot(q, (querySnapshot) => {
        const PopisStolova = [];
        querySnapshot.forEach((doc) => {
          PopisStolova.push({ id: doc.id, ...doc.data() });
        });
        this.KarticaStol = PopisStolova;
      });
    },
   
  },
  components: { Sidebar, Stol, DodavanjeStola },
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
  padding: 2rem;


}

.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}
</style>
