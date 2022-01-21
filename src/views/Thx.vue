<template>
  <div>
      <p>HVALA NA KUPNJI!</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    
created(){

},
computed:{
    ...mapGetters({stol: 'getTable'})
},
created(){
    setTimeout(() => {this.redirect()}, 2000)
},
methods: {
    redirect(){
        this.$router.push({path: '/new_order/getTable'})
    }
},
};

</script>

<style scoped>
p{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  font-size: 6rem;
  font-family: "Amatic SC", cursive;
  color: white;
}
</style>