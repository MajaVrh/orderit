<template>
  <router-link :to="{name:'UredivanjePonudeDetailPotkategorije', params : {idPodkategorije: id}}" class="KategorijaStavke">
    <div>{{info.Ime}}</div>
  </router-link>
</template>

<script>
export default {
  name: "Potkategorija",
   props: ["info" ,"id"] ,
};

</script>
<style scoped>
.KategorijaStavke {
  border: 4px solid #731642;
  border-radius: 10px;
  background-color: #ffffff;
  color: #731642;
  font-weight: bold;
  font-size: 20px;
padding: 1rem;
  max-width: 8.8rem;
  max-width: 3.9rem;
  min-height: 3.9rem;
  min-width: 8.8rem;
  display: flex;
  /*text-shadow: 1px 1px #7e7e7ea6;
    box-shadow: 1px 1px #7e7e7ea6; */
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.KategorijaStavke:hover {
  cursor: pointer;
  background-color: #7217411f;
  opacity: 50;

}
</style>
