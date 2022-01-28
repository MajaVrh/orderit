<template>

  <div class="krug">
  

     <qr-code   class="QR" :text="this.linkStola"   :size="110" level="Q" color="#731642" > </qr-code>
    
    <p class="naziv">{{Stol.oznaka}}</p>
    <button class="ButtonKonobar" v-if="store.admin" @click="brisanje">
      <i  class="fas fa-times-circle ikona"></i>
    </button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)
import {  doc,
  deleteDoc, db } from "@/firebase";
  import store from "@/store/index"



export default {
   name: "Stol",
 
   data(){
     return{store,
      OznakaStola :"",
      linkStola:"",
     link: store.admin ? "Konobari" : "Izvjestaj"}
   },
   props:["Stol","id"],
 
  mounted(){this.spojiLink()},
   methods:{
     async brisanje(){
    await deleteDoc(doc(db, "Stolovi",  this.id));
    console.log("BRISANJE")},

    spojiLink(){this.linkStola="https://m-orderit.netlify.app/new_order/"+this.id
    console.log(this.linkStola)

  },
}}
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
margin: auto;
padding-top:1rem ;
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
display: flex;
  height: 11rem;
  width: 11rem;
  border-radius: 100%;
  border: 3.5px solid #731641;
  padding: 0.5rem;
   margin: 1rem;
   filter: drop-shadow(1px 1px 1px #00000054);
   box-shadow: 2px 2px 5px rgba(170, 170, 170, 0.733);
  margin-right: 1rem; 
  justify-content: center;

  flex-direction: column;
 
 

}

i{z-index: 999;}



.naziv{color: #731642;

  font-size: 16px;
    font-weight: bold;
    
    }

    a{  text-decoration: none;}
</style>
