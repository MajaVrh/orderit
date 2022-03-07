<template>
  <div>
      <p>HVALA NA NARUDŽBI!</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
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
    ...mapMutations({resetStore: 'resetStore'}),
    redirect(){
        const idStol = this.stol.id;
        this.resetStore();
        this.$router.push({path: `/new_order/${idStol}`})
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