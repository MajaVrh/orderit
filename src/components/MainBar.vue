<template>
  <ul>
    <li v-if="IsLeft" class="left"> <img src="https://picsum.photos/100" alt=""> <router-link to="/">PRVA</router-link></li>
    <li v-else class="right"> <router-link to="/">PRVA</router-link> <img src="https://picsum.photos/100" alt=""></li>
  </ul>
</template>

<script>
export default {
  name: "MainBars",
  props: {
    IsLeft: Boolean,

  },
};
</script>

<style>
ul>li{
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 1rem;
  
  align-items: center;
  margin-top: 1rem;
}
a{
  text-decoration: none;
  color: white;
  font-family: 'Amatic SC', cursive;
  font-size: 3rem;
}
.left>a{
  margin-left: auto;
}
.right>img{
  margin-left: auto;
}
</style>