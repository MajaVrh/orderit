<template>
  <div class="wrapper">
    <img  src="@/assets/kafic.png"/>
    <p>Info</p>
  </div>
</template>

<script>
export default {
  name: "ImageFrameInfo",
};


</script>

<style scoped>
.wrapper {
  display: grid;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.65);
  min-height: 115px;
  max-width: 60%;
  padding: 1rem;
  border-radius: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
img {
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