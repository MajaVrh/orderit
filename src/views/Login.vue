<template>
  <div class="container">
    <div class="lijevo">
      <div class="sredina">
        <img src="@/assets/l.png" alt="" />
      </div>
    </div>
    <div class="desno">
      <div class="sredina">
        <div class="raspored">
          <img
            style="width: 150px; margin: 0 auto 1rem auto"
            src="@/assets/user.png"
            alt=""
          />
          <input
            name="password"
            type="password"
            placeholder="upišite lozinku"
          />
           <router-link :to="{name: 'UredjivanjePonude'}">
            <button class="btn" >Login</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
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

.raspored {
  display: flex;
  flex-direction: column;
}

.lijevo {
  width: 100%;
  height: 100%;
  background-color: #750c3b;
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
  text-align: center;
  min-height: 100%;
}

.btn {
  min-width: 15rem;
  padding: 0.8rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #750c3b;
  color: white;
  margin-top: 1rem;
  font-size: 20px;
}

input {
  border-radius: 30px;
  font-size: 16px;
  border: 2px solid #750c3b;
  padding: 0.8rem;
}

input:focus {
  outline: none;
  border: 2px solid #750c3b;
}

input::placeholder {
  font-style: italic;
}

.btn:hover {
  cursor: pointer;
  background-color: rgba(117, 12, 59, .9);
}
</style>
