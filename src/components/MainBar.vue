<template>
  <ul>
    <router-link :to="info.route" v-if="IsLeft" class="left"><li ><img :src="info.image"> <span>{{ info.description }}</span> </li> </router-link>
    <router-link :to="info.route" v-else class="right"><li ><span>{{ info.description }}</span><img :src="info.image" alt="">  </li> </router-link>
  </ul>
</template>

<script>
export default {
  name: "MainBars",
  props: {
    IsLeft: Boolean,
    info: Object
  },
};
</script>

<style scoped>
ul>a>li{
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
.left>li>span{
  margin-left: auto;
}
.right>li>img{
  margin-left: auto;

}
</style>