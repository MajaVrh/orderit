<template>
  <div>
    <router-link :to="info.route" v-if="IsLeft" class="left"
      ><div class="elements">
        <img :src="info.image" /> <span>{{ info.description }}</span>
      </div>
    </router-link>
    <router-link :to="info.route" v-else class="right"
      ><div class="elements">
        <span>{{ info.description }}</span
        ><img :src="info.image" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainBars",
  props: {
    IsLeft: Boolean,
    info: Object,
  },
};
</script>

<style scoped>
.elements {
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 1rem;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
}

a {
  text-decoration: none;
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 3rem;
}
.left > .elements > span {
  margin-left: auto;
}
.right > .elements > img {
  margin-left: auto;
}
</style>