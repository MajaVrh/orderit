<template>
  <div>
    <router-link :to="!isInfo ? {name:'GeneralView', params : {id: id}} : {name: 'Info'}" v-if="IsLeft" class="left"
      ><div class="elements">
        <img :src="imageURL" /> <span>{{ naziv }}</span>
      </div>
    </router-link>
    <router-link :to="!isInfo ? {name:'GeneralView', params : {id: id}} : {name: 'Info'}" v-else class="right"
      ><div class="elements">
        <span>{{ naziv }}</span
        ><img :src="imageURL" alt="" />
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MainBars",
  props: {
    id: String,
    IsLeft: Boolean,
    imageURL: String,
    naziv: String,
    isInfo: Boolean,
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
img{
  width: 8rem;
  height: 8rem;
}
</style>