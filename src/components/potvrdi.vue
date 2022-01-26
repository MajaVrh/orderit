<template>

 <button
        class="potvrdi"
      > Potvrdi</button>
</template>

<script>
export default{
    name: "potvrdi"
}
</script>

<style scoped>

 .potvrdi {
display: flex;
justify-content: center;
align-items: center;
  background-color: #ffffff;
  color: #731642;
  border-radius: 7px;
padding-bottom:0.5rem ;
  padding-top: 0.5rem;
  border: none;
  font-weight: bold;

  outline: none;
  max-width: 5rem;
   min-width: 5rem;
  max-height: 1.8rem;
  min-height: 1.8rem;
  margin-bottom: 0.2rem;
}

.potvrdi:hover {
  cursor: pointer;
  background-color: #aa6b88e3;
  color: #ffffff;
}
</style>
