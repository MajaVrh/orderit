<template>
  <div>
    <div class="wrapper">
      <span>{{ infocards.ime }}</span>
      <div class="right">
        <span>{{ infocards.cijena }}</span>
      </div>
      <div class="tipka" @click="isModalVisible = !isModalVisible"><i class="fas fa-info-circle"></i></div>
    </div>
    <div class="modal" v-if="isModalVisible">
      <div class="modal-contant" @click="isModalVisible = !isModalVisible">
        <p class="naslov">Kava sa mlijekom</p>
        <p>0.5ml</p>
        <p>13.00kn</p>
        
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "Pića",
  props: {
    infocards: Object,
  },
  mounted() {
    document.body.addEventListener('click', this.closeIfModalOn, true)
  },
  data() {
    return {
      isModalVisible: false,
    
    }
  },
  methods: {
    closeIfModalOn() {
      
      if(this.isModalVisible) {
        this.isModalVisible = false;
      }
    },
  }

};
</script>

<style scoped>
.wrapper {
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  padding: 1rem;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
  font-family: "Marcellus", serif;
  margin-bottom: 15px;
}
.right {
  display: flex;
  margin-left: auto;
}
.right > span {
  margin-right: 15px;
}
i {
  font-size: 20px;
}

.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  font-family: "Marcellus", serif;
  color: black;
}
.modal-contant {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 50%;
  height: fit-content;
  background-color: #fefefe;
  padding: 1.5rem;
  border-radius: 1.5rem;
 
}

.naslov{
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-weight: bold;
}
</style>