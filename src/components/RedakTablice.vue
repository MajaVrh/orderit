<template>
  <div class="redak">
    <div class="stupac najmanji">1</div>
    <div class="stupac srednji">{{ StavkeID.ime }}</div>
    <div class="stupac manji">{{ stavke.kolicina }}</div>
    <div class="stupac manji">{{ StavkeID.cijena }}</div>
    <div class="stupac manji">24 kn</div>
  </div>
</template>

<script>
import { db, collection, query, getDocs, doc } from "@/firebase";
export default {
  name: "RedakTablice",
  props: ["InfoNarudzbe"],
  data() {
    return {
      stavke: [],
      StavkeID: [],
    };
  },

  mounted() {
    this.DohvatiStavke();
  },
  methods: {


    async DohvatiStavke() {
      const q = query(
        collection(
          doc(collection(db, "Narudzbe"), this.InfoNarudzbe.id),
          "Stavke"
        )
      );
      const docSnap = await getDocs(q);
      let newArr = [];
      docSnap.forEach((element) => {
        newArr.push({ id: element.id, ...element.data() });
      });

      this.StavkeID = newArr;
      console.log(this.StavkeID);
      this.Filtriraj()
      
    },

    Filtriraj(){
      this.StavkeID.forEach(element => {console.log("Uskoro gotovi----> valda")
        
      });
      }
  },
};
</script>

<style>
.redak {
  width: 100%;
  height: 1.8rem;
  background-color: #b9889d;
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.4fr 0.4fr 0.4fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
  color: white;
}
.stupac {
  border-left: 1px rgb(255, 255, 255) solid;

  grid-gap: 1px;
  width: 100%;

  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.siri {
  min-width: 13rem !important;
}
.manji {
  min-width: 5rem !important;
}
.najmanji {
  min-width: 2rem !important;
}
</style>
