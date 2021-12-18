<template>
  <div>
    <router-link :to="info.routes"
      ><div class="elements">
        <span>{{ info.description }}</span> <i class="fas fa-chevron-right"></i>
      </div>
    </router-link>
  </div>
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
.elements > span {
  margin-right: auto;
}
.elements > i {
  margin-left: auto;
  font-size: 1.5rem;
}
</style>