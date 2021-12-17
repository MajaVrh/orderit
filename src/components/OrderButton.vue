<template>
<div class="tipka">
  <router-link class="tekst" to="/">Vaša naruđba</router-link>
</div>
</template>

<script>
export default {
  name: "order",
};
</script>

<style>
  .tekst{
    color: black;
    font-family: "Marcellus", serif;
    font-size: 2rem;
    padding: 10px;
  }
  .tipka{
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 1rem;
    border-radius: 50px;
  }
</style>
