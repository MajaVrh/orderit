<template>
  <ul>
    <router-link to="/"
      ><li><span>{{ info.description }}</span> <i class="fas fa-chevron-right"></i></li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "SubBar",
  props: {
    info: Object,
  },
};
</script>

<style scoped>
ul > a > li {
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 1rem;

  align-items: center;
  margin-top: 1rem;
}
a {
  text-decoration: none;
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 3rem;
}
li > span {
  margin-right: auto;
}
li > i {
  margin-left: auto;
  font-size: 1.5rem;
}
</style>