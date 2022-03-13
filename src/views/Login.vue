<template>
  <div class="container">
    <div class="lijevo">
      <div class="sredina">
        <img src="@/assets/l.png" alt="" />
      </div>
    </div>
    <div class="desno">     <div class="natrag"> <router-link :to="{ name: 'Home' }"> <Natrag /></router-link></div>
      <div class="sredina">
    
        <div class="raspored">
       
          <img
            style="width: 150px; margin: 0 auto 1rem auto"
            src="@/assets/user.png"
            alt=""
          />
          <input
            v-model="password"
            name="password"
            type="password"
            placeholder="upišite lozinku"
          />

          <button @click="login()" class="btn">Login</button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Natrag from "@/components/Natrag";
import { auth, signInWithEmailAndPassword } from "@/firebase";
export default {
  name: "Login",
  data() {
    return { email: "admin@gmail.com",
             password: "" };
  },
  components:{Natrag},
  methods: {
    login() {
      
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.$router.push({ name: "UredjivanjePonude" });
        
        })
        .catch((error) => {
           
          const errorCode = error.code;
          const errorMessage = error.message;
         if ( errorCode === 'auth/wrong-password' ) return alert("Unijeli ste krivu lozinku!")
          console.log(error);
          
        });
    },
    popUp(text) {
      this.error = text;
    },
  },
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
  text-align: center;
  min-height: 100%;
}

.btn {
  min-width: 15rem;
  padding: 0.8rem;
  border-radius: 30px;
  border: none;
  outline: none;
  background-color: #731642;
  color: white;
  margin-top: 1rem;
  font-size: 18px;
  
}

.btn:hover{  cursor: pointer;
 background-color: #721741d5;
  
  border: #721741d5;
  color: #ffffff !important;}

input {
  border-radius: 30px;
  font-size: 16px;
  border: 2px solid #731642;
  padding: 0.8rem;
}

input:focus {
  outline: none;
  border: 2px solid #731642;
}

input::placeholder {
  font-style: italic;
}

.btn:hover {
  cursor: pointer;
  background-color: #721741d5;
}
.natrag{margin-left: -56%;}


</style>
