<template>
  <router-link :to="{ name: 'DodajKonobara' }">
    <div class="dodavanje">
      <img
        class="slika"
        style="width: 80px; margin: 0.8rem auto auto auto"
        src="@/assets/dodajZaposlenika.png"
        alt="slika"
      />

      <p>Dodaj konobara</p>
    </div></router-link
  >
</template>

<script>
export default {
  name: "dodavanjeZaposlenika",
};
</script>

<style>
.dodavanje {
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 100%;
  border: 3.5px solid #731641;
  padding: 0.5rem;
  background-color: #731641;
  color: white;
  font-size: 16px;
  font-weight: bold;

  margin-right: 1rem;
  margin-left: 1rem;
}

a {
  text-decoration: none;
}
.dodavanje:hover {
  cursor: pointer;
  background-color: #721741d5;
  border: 3.5px solid #72174100;
  color: #ffffff;
}
</style>
