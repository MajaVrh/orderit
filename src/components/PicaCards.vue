<template>
  <div class="wrapper">
    <span>{{infocards.ime}}</span><div class="right"><span>{{infocards.cijena}}</span></div>
    <i class="fas fa-info-circle"></i>
    
  </div>
</template>

<script>
export default {
  name: "Pića",
  props:{
      infocards: Object,
  }
};
</script>

<style scoped>
.wrapper{
    display: flex;
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
    padding: 1rem;
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
    font-family: "Marcellus", serif;
    margin-bottom: 15px;
}
.right{
    display: flex;
    margin-left: auto;
}
.right>span{
    margin-right: 15px;
}
i{
    font-size: 20px;
}
</style>