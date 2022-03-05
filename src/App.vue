<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'



export default {
name: "app",
mounted() {
  const konobar = localStorage.getItem("konobar")
  if(konobar) {
    this.postaviKonobara(konobar)
  }
},
methods: {
  ...mapMutations({postaviKonobara: "setKonobar"})
}
}

</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');
 @import url(https://fonts.googleapis.com/css2?family=Mandali&display=swap);
 @import url(https://fonts.googleapis.com/css2?family=Marcellus&display=swap);

 

button{  font-family: Avenir, Helvetica, Arial, sans-serif;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;

}

body{width: 100%;
height: 100vh;}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

