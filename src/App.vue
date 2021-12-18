<template>
    <div id="app">
      <router-view />
    <img class="bottom" src="@/assets/MainLogo.png" alt="">

    </div>

</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Marcellus&display=swap");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

html {
  min-height: 100%;
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
* {
  margin: 0px;
  padding: 0px;
}

body {
  background-color: rgb(117, 12, 59);
}

.bottom {
  margin-top: 10%;
  margin-bottom: 5%;
  height: 8rem;
}

</style>
