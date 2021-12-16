<template>
  <router-link :to="{ name: 'DodajKonobara' }">
    <div class="dodavanje">
      <img
        style="width: 80px; margin: 0.8rem auto auto auto"
        src="@/assets/dodajZaposlenika.png"
        alt=""
      />

      <p>Dodaj konobara</p>
    </div></router-link
  >
</template>

<script>
export default {
  name: "dodavanjeZaposlenika",
  methods: {
    brisanje() {
      console.log("BRISANJE");
    },
  },
};
</script>

<style>
.ikona:hover {
  cursor: pointer;
}

.dodavanje {
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 100%;
  border: 3.5px solid #731641;
  padding: 0.5rem;
  background-color: #731641;
  color: white;
  font-size: 16px;
  font-weight:bold;
  filter: drop-shadow(1px 1px 1px #0000007a);
   box-shadow: 2px 2px 0 rgba(170, 170, 170, 0.733);
    margin-left: 1rem;
  
}

i {
  z-index: 999;
}

img {
  margin: 1rem;
  
 
}

a {
  text-decoration: none;
}
</style>
