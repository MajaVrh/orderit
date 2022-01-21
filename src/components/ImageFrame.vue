<template>
  <div class="wrapper">
    <img v-if="imageURL" :src="imageURL" />
    <p v-if="ime">{{ ime }}</p>
  </div>
</template>

<script>
export default {
  name: "ImageFrame",
  props: {
    imageURL: String,
    imageURLinfo: String,
    ime: String,
  },
};


</script>

<style scoped>
.wrapper {
  display: grid;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.65);
  min-height: 5rem;
  max-width: 60%;
  padding: 1rem;
  border-radius: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
img {
  height: 8rem;
  margin-bottom: 10px;
}
p {
  text-decoration: none;
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 2.5rem;
  font-weight: bold;
}
</style>