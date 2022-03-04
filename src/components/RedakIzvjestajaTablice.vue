<template>
  <div>
    <div   class="redak">

     <div class="stupac celija">{{stavkeIzvjestaja.naziv}}</div>
              <div class="stupac celija">{{stavkeIzvjestaja.kolicina}}</div>
              <div class="stupac celija">{{stavkeIzvjestaja.cijenaArtikla}}</div>
              <div class="stupac celija">{{stavkeIzvjestaja.ukupnaCijena}}</div>
    </div>
    
  </div>
  
</template>

<script>

export default {
  name: "RedakIzvjestajaTablice",
  props: ["stavkeIzvjestaja"],
  data() {
    return {
    };
  },

 mounted() {
    
  },
  computed: {
  },
  methods: {
  
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
