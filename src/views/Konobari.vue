<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">Konobari</h1>
      <div class="raspored">
        <konobar v-for="K in KarticaKonobara" :key="K.id" :id="K.id" :info="K"  />

        <dodavanjeZaposlenika />
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
    //DAJE TOČNO TRENUTAK KAD SAM SE DATOTRKA PRIKAŽE NA ERKRANU, on se prikaže kad se home.vue treba prikazati na ekranu
    this.PrikazKnobara();
  },
  methods: {
    async PrikazKnobara() {
      const q = query(collection(db, "PopisKonobara"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
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
}

.raspored {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}
</style>
