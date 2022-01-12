<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">Konobari</h1>
      <div class="raspored">
        <dodavanjeZaposlenika />
        <konobar v-for="K in KarticaKonobara" :key="K.id" :id="K.id" :info="K"  />

      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Konobar from "@/components/Konobar";
import dodavanjeZaposlenika from "@/components/dodavanjeZaposlenika";
import { db, collection, query, onSnapshot,   } from "@/firebase";

export default {
  name: "Konobari",
  data: function () {
    return {
      KarticaKonobara: [],
      ImeKonobara: "",
      PrezimeKonobara: "",
    };
  },
  mounted() {
    //DAJE TOČNO TRENUTAK KAD DA SE DATOTRKA PRIKAŽE NA ERKRANU
    this.PrikazKnobara();
  },
  methods: {
    async PrikazKnobara() {
      const q = query(collection(db, "PopisKonobara"));
      onSnapshot(q, (querySnapshot) => {
        const PopisKonobara = [];
        querySnapshot.forEach((doc) => {
          PopisKonobara.push({ id: doc.id, ...doc.data() });
        });
        this.KarticaKonobara = PopisKonobara;
      });
    },
  },
  components: { Sidebar, Konobar, dodavanjeZaposlenika },
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


}

.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}
</style>
