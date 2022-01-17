<template>
  <div>
    <div class="wrapper" @click="isModalVisible = !isModalVisible" >
      <span>{{ ime }}</span>
      <div class="right">
        <span>{{ cijena }}</span>
      </div>
    </div>

    <div class="modal" v-if="isModalVisible">
      <div class="modal-contant" @click="isModalVisible = !isModalVisible">
        <p class="naslov" style="margin-bottom: 10px">{{ ime }}</p>
        <p class="head">Opis</p>
        <p style="margin-bottom: 10px">{{ description }}</p>
        <p class="head">Količina</p>
        <div class="increment" style="margin-bottom: 10px"><span @click="() => amount - 1 < 0 ? amount = 0: amount--"><i class="fas fa-minus"></i></span><span>{{amount}}</span><span @click="() => amount++" id="increment"><i class="fas fa-plus"></i></span></div>
        <p class="head" >Cijena</p>
        <p style="margin-bottom: 10px">{{ cijena }}</p>
        <div class="button" @click="cartAdd()">Dodaj</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Pića",
  props: {
    id: String,
    ime: String,
    description: String,
    cijena: String,
  },
  mounted() {
    document.body.addEventListener("click", this.closeIfModalOn, true);
  },
  data() {
    return {
      isModalVisible: false,
      amount: 0,
      item: {
        id: this.id,
        ime: this.ime,
        cijena: this.cijena
      }
    };
  },
  methods: {
    ...mapActions({addItemsToCart: 'addItemsToCart'}),
    closeIfModalOn() {
      if (this.isModalVisible) {
        this.isModalVisible = false;
      }
    },
    logMeHard() {
      console.log("Test");
    },
    cartAdd() {
      this.addItemsToCart({item: this.item, amount: this.amount})
    }
  },
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


.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
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

.naslov {
  font-size: 1.6rem;
  margin-bottom: 5px;
  font-weight: bold;
}
.increment {
  display: flex;
  align-items: center;
  justify-content: center;
}

.increment > span {
  margin: 0 10px 0 10px;
  font-size: 1.5rem;
}
.increment>span>i{
  font-size: 1rem;
}

.head {
  font-size: 1rem;
  font-weight: bold;
}
.button{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: black 1px solid;
  padding: 5px;
  width: 50%;
  border-radius: 15px;
}


</style>