<template>
  <div class="wrapper">
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
  align-items: center;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.65);
  min-height: 115px;

  margin-top: 2rem;
  margin-bottom: 2rem;
}

p {
  text-decoration: none;
  color: white;
  font-family: "Amatic SC", cursive;
  font-size: 4rem;
  font-weight: bold;
}
</style>