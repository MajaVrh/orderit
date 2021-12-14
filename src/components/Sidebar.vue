<template>
  <div class="sidebar">
    <div class="naslov"><b>COFFE SHOP CENTRAL PERK</b></div>
    <ul class="gore">
      <li>
        <router-link :to="{ name: 'UredjivanjePonude' }"
          >Uređivanje ponude</router-link
        >
      </li>
      <li><router-link :to="{ name: 'Izvjestaj' }">Izvještaj</router-link></li>
      <li><router-link :to="{ name: 'Stolovi' }">Stolovi</router-link></li>
      <li><router-link :to="{ name: 'Narudzbe' }"> Narudžbe</router-link></li>
      <li><router-link :to="{ name: 'Info' }">Info </router-link></li>
    </ul>
    <ul class="dole">
      <li><router-link :to="{ name: 'Home' }">
         Odjava </router-link></li>
      
      <img
        style="width: 310px; margin: 2rem auto 2rem auto"
        src="@/assets/kafic.png"
        alt=""
      /> 
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #750c3b;
  width: 25%;
  height: 100vh;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

a {
  display: flex;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 1rem 0;
  justify-content: center;

  &.router-link-exact-active {
    color: #ffffff;
    width: 100% !important;
    display: flex;
    background-color: #ffffff50;
  
    justify-content: center;
   
  }
}

.naslov {
  font-family: "Amatic SC", cursive;
  font-size: 40px;
}

.dole {
  margin-top: auto;
}



</style>
