<template>
  <div class="PozicijaNatrag">
    <i class="fas fa-arrow-circle-left natrag"></i>
  </div>
</template>

<script>
export default {
  name: "Natrag",
};
</script>

<style scoped>
.natrag {
  color: #731642;
  font-size: 45px;
  padding-left: 30%;
  margin-top: 52vh;
  height: 100%;
  position: fixed;
}

.PozicijaNatrag {
  margin-top: -3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.PozicijaNatrag :hover {
  cursor: pointer;
  color: #721741d5;
}
</style>
