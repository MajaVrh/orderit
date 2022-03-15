<template>
    <div>
    <router-link :to="{name:'Info'}"  class="left"
      ><div class="elements">
        <span>Info</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
name: "InfoBars",
  props: {
    id: String,

  },
}
</script>

<style scoped>
.elements {
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  justify-content: center;
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
  font-size: 3.5rem;
}

</style>