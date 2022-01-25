<template>
  <div class="container">
    <div class="lijevo">
      <div class="sredina">
        <img src="@/assets/l.png" alt="" />

      </div>
      
    </div>
    <div class="desno">
      
      <div class="sredina">
          <router-link :to="{ name: 'Home' }"><i class="fas fa-arrow-circle-left natrag"></i> </router-link>
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
  width: 50%;
  height: 100%;
  background-color: #731642;
  position: fixed;
}

.desno {
  width: 50%;
  height: 100%;
  background-color: white;
padding: 3rem;
margin-left: 50%;
}

.sredina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
   max-width: 120vh;
  
  


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

.natrag{color:#731642;
font-size: 40px;
margin-left:-1rem;
justify-content: center;
margin-top: -4.5rem;
position: fixed;}
</style>
