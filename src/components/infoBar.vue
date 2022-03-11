<template>
    <div>
    <router-link :to="{name:'Info'}" v-if="IsLeft" class="left"
      ><div class="elements">
        <img src="@/assets/kafic.png" /> 
        <span>Info</span>
      </div>
    </router-link>
    <router-link :to="{name:'Info'}"  v-else class="right"
      ><div class="elements">
        <span>Info</span
        ><img src="@/assets/kafic.png" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
name: "InfoBars",
  props: {
    id: String,
    IsLeft: Boolean,

  },
}
</script>

<style scoped>
.elements {
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 1rem;
  align-items: center;
  margin-top: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
  height: 8rem;
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
  width: 12rem;
  height: auto;
  object-fit: contain;
  

}

</style>