<template>
  <div class="wrapper">
    <img :src="info" />
    <p>{{ TitleConnect }}</p>
  </div>
</template>

<script>
export default {
  name: "ImageFrame",
  props: {
    info: String,
    TitleConnect: String,
  },
};
</script>

<style scoped>
.wrapper {
  display: block;
  position: relative;
  background-color: rgba(0, 0, 0, 0.65);
  min-height: 115px;
  width: 60%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
img {
  margin: 0 auto;
  height: 6rem;
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