<template>
  <div>
    <router-link v-if="katID" :to="{name: 'Ponuda', params: {id: id, katID: katID}}"
      ><div class="elements">
        <span>{{ ime }}</span> <i class="fas fa-chevron-right"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubBar",
  props: {
    ime: String,
    id: String,
    katID: String,
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