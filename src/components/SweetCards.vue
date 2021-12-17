<template>
  <div class="card-wrapper">
    <div class="wrapper-sweat">
      <p>{{infoslad.proizvod}}</p>
      <i class="fas fa-info-circle wrapper-sweat-item"></i>
    </div>
    <img :src="infoslad.slika" alt="" />
    <p>{{infoslad.cijena}}</p>
  </div>
</template>

<script>
export default {
  name: "SweetCards",
  props: {
    infoslad: Object,
  },
};
</script>

<style>
.card-wrapper {
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  font-family: "Marcellus", serif;
  margin-top: 1rem;

}

.card-wrapper > img {
  width: 300px;
  margin: 1rem auto;
}
.wrapper-sweat {
  position: relative;
  display: flex;
  font-size: 20px;
}

.wrapper-sweat > p {
  margin: 0 auto;
}

.wrapper-sweat-item {
  position: absolute;
  right: 5%;
}
</style>