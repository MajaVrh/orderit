<template>
  <div class="container">
    <div class="lijevo">
      <div class="sredina">
        <img src="@/assets/l.png" alt="" />
      </div>
    </div>
    <div class="desno">
      <div class="sredina">
        <div class="rasporedButtona">
          <router-link :to="{name: 'Login'}">
            <button class="btn" type="submit">Admin</button>
          </router-link>
          <router-link :to="{name: 'OdabirKonobara'}">
            <button class="btn" type="submit">Konobar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
 
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.rasporedButtona {
  display: flex;
  flex-direction: column;
}

.lijevo {
  width: 100%;
  height: 100%;
  background-color: #731642;
}

.desno {
  width: 100%;
  height: 100%;
  background-color: white;
}

.sredina {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

}

.btn {
  min-width: 15rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  margin-top: 1rem;
  font-size: 20px;
    filter: drop-shadow(2px 2px 2px #000000a9)
}

.btn:hover {
  cursor: pointer;
  background-color: rgba(117, 12, 59, .9);
}
</style>
