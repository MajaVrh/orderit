<template>
  <div>
    <div  v-for="P in izvjestaj" :key="P.naziv"  class="redak">

      <div class="stupac srednji">{{ P.naziv }}</div>
      <div class="stupac manji">{{P.kolicina}} kom</div>
      <div class="stupac manji">{{ P.cijenaArtikla }} kn</div>
      <div class="stupac manji">{{ P.ukupnaCijena }} kn</div>
    </div>
    
  </div>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "RedakTablice",
  
  data() {
    return {
    };
  },

  async mounted() {
    await this.dohvatiStavke(); 
  },
  computed: {
    ...mapGetters({izvjestaj: 'izvjestaj'}) // => this.izvjestaj
  },
  methods: {
    ...mapActions({dohvatiStavke: 'dohvatiStavke'}),
  },
};
</script>

<style scoped>
.redak {
  width: 100%;
  height: 1.8rem;
  background-color: #b9889d;
  display: grid;
  grid-template-columns:  1fr 0.5fr 0.5fr 0.5fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px rgb(255, 255, 255) solid;
  color: white;
}
.stupac {


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

</style>
