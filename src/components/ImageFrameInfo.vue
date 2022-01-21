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
  height: 5rem;
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