<template>
  <div class="wrapper">
    <div class="top-left"><i class="fas fa-info-circle"></i></div>
    <div class="middle">
      <img :src="infospec.slika1" alt="" /> <i class="fas fa-plus"></i
      ><img :src="infospec.slika2" alt="" /><i
        class="fas fa-equals"
      ></i>
      <p>{{infospec.cijena}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialCards",
  props: {
    infospec: Object,
},
};

</script>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.8rem;
  margin-top: 1rem;
  color: white;
}
.top-left {
  position: absolute;
  right: 5%;
  font-size: 1.2rem;
}
.middle{
    display: flex;
    justify-content: center;
    align-items: center;
}
.middle>img, .middle>i{
    margin: 8px;
}

.middle>i{
    font-size: 12px;
}
.middle>p{
    font-size: 1.12rem;
    font-family: "Marcellus", serif;
}
</style>