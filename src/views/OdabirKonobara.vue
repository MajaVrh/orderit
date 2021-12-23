<template>
  <div class="container">
    <div class="lijevo">
      <div class="sredina">
        <img src="@/assets/l.png" alt="" />

      </div>
      
    </div>
    <div class="desno">
      <div class="sredina">
        <div class="rasporedKonobara">
          <konobar v-for="K in KarticaKonobara" :key="K.id" :id="K.id" :info="K"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Konobar from '@/components/Konobar'
import { db, collection, query, onSnapshot,   } from "@/firebase";
export default {
  name: "OdabirKonobara",
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
  components: {Konobar}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
}



.rasporedKonobara {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
}

.lijevo {
  width: 100%;
  height: 100%;
  background-color: #731642;
}

.desno {
  width: 100%;
  height: 100%;
  background-color: white;

}

.sredina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
   
}

.btn {
  min-width: 15rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  margin-top: 1rem;
  font-size: 20px;
}

.btn:hover {
  cursor: pointer;
  background-color: rgba(117, 12, 59, .9);
}
</style>
