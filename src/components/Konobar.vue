<template>
<router-link :to="{ name: link }">
  <div class="krug">
  

    <img
      style="width: 80px; margin: 0.8rem auto auto auto"
      src="@/assets/user.png"
      alt=""
    />
    
    <p class="naziv">{{info.ImeKonobara}} {{info.PrezimeKonobara[0]}}.</p>
    <button v-if="store.admin" @click="brisanje">
      <i  class="fas fa-times-circle ikona"></i>
    </button>
  </div></router-link>
</template>

<script>

import {  doc,
  deleteDoc, db } from "@/firebase";
  import store from "@/store/index"



export default {
   name: "Konobar",
   props: ["info" ,"id"] ,
   data(){
     return{store,
     link: store.admin ? "Narudzbe" : "Izvjestaj"}
   },
  
   methods:{
     async brisanje(){
    await deleteDoc(doc(db, "PopisKonobara",  this.id));
    console.log("BRISANJE")}
  }
};
</script>

<style>

button {
  border-radius: 50%;
  z-index: 9999;
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}

i{
  color: #731642;
  font-size: 18px;
  z-index: 9999;
}

.ikona:hover {
  
  cursor:pointer;
}

.krug {
  height: 8.8rem;
  width: 8.8rem;
  border-radius: 100%;
  border: 3.5px solid #731641;
  padding: 0.5rem;
   margin: 1rem;
   filter: drop-shadow(1px 1px 1px #00000054);
   box-shadow: 2px 2px 5px rgba(170, 170, 170, 0.733);
  margin-right: 1rem; 
 
 

}

i{z-index: 999;}

img {
 margin: 1rem;

 
}

.naziv{color: #731642;

  font-size: 16px;
    font-weight: bold;
    
    }

    a{  text-decoration: none;}
</style>
