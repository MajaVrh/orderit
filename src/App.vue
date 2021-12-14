<template>
  <div id="app">
   <img class="LogoBottom" src="@/assets/MainLogo.png" alt="">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap%27');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.LogoBottom{
  right: 28%;
  bottom: 0;
  position: fixed;
  margin-bottom: 3rem;
  width: 10rem;
  
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*{
  margin: 0px;
  padding: 0px;
}

body{
  background-color: rgb(117, 12, 59);
}

</style>
