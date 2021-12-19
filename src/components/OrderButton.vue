<template>
  <router-link class="tipka" to="/">Vaša naruđba</router-link>
</template>

<script>
export default {
  name: "order",
};
</script>

<style lang="scss" scoped>
.tipka {
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 2rem 4rem 0rem 4rem;
  border-radius: 50px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
  color: black;
  font-family: "Marcellus", serif;
  font-size: 1.5rem;
  padding: 10px;
}
a {
  text-decoration: none !important;

  &.router-link-active {
    text-decoration: none;
  }
}
</style>
