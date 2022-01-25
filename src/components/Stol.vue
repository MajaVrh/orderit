<template>

  <div class="krug">
  

      <qrcode-vue  class="QR" value="https://www.facebook.com/profile.php?id=100008881964251"   size="90" level="Q" foreground="#731642" />
    
    <p class="naziv">{{Stol.oznaka}}</p>
    <button class="ButtonKonobar" v-if="store.admin" @click="brisanje">
      <i  class="fas fa-times-circle ikona"></i>
    </button>
  </div>
</template>

<script>
 import QrcodeVue from 'qrcode.vue'
import {  doc,
  deleteDoc, db } from "@/firebase";
  import store from "@/store/index"



export default {
   name: "Stol",
 
   data(){
     return{store,
      OznakaStola :"",
     link: store.admin ? "Konobari" : "Izvjestaj"}
   },
   props:["Stol","id"],
  components:{QrcodeVue},
   methods:{
     async brisanje(){
    await deleteDoc(doc(db, "Stolovi",  this.id));
    console.log("BRISANJE")},

  }
};
</script>

<style scoped>


.ButtonKonobar {

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

.QR{margin-top: 1.3rem;
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
  height: 11rem;
  width: 11rem;
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
