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
  align-self: center;
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
  display: flex;
  margin: 0 auto;
  height: 6rem;
  width: auto;
  object-fit: contain;
  margin-bottom: 10px;
}
p {
  margin-top: -0.6rem;
  text-decoration: none;
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 2.5rem;
  font-weight: bold;
}
</style>