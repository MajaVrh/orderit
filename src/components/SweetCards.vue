<template>
  <div>
    <div class="card-wrapper" @click="isModalVisible = !isModalVisible">
      <p class="naslov">{{ infoslad.proizvod }}</p>
      <img :src="infoslad.slika" alt="" />
      <p>{{ infoslad.cijena }}</p>
    </div>

    <div class="modal" v-if="isModalVisible">
      <div class="modal-contant" @click="isModalVisible = !isModalVisible">
        <p class="naslov-modal" style="margin-bottom: 10px">{{ infoslad.proizvod }}</p>
        <p class="head">Opis</p>
        <p style="margin-bottom: 10px">{{ infoslad.opis }}</p>
        <p class="head">Količina</p>
        <div class="increment" style="margin-bottom: 10px">
          <span @click="() => (number - 1 < 0 ? (number = 0) : number--)"
            ><i class="fas fa-minus"></i></span
          ><span>{{ number }}</span
          ><span @click="() => number++"><i class="fas fa-plus"></i></span>
        </div>
        <p class="head">Cijena</p>
        <p style="margin-bottom: 10px">{{ infoslad.cijena }}</p>
        <div class="button" >Dodaj</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SweetCards",
  props: {
    infoslad: Object,
  },
  mounted() {
    document.body.addEventListener("click", this.closeIfModalOn, true);
  },

  data() {
    return {
      isModalVisible: false,
      number: 0,
    };
  },
  methods: {
    closeIfModalOn() {
      if (this.isModalVisible) {
        this.isModalVisible = false;
      }
    },
  },
};
</script>

<style scoped>
.card-wrapper {
  background-color: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  font-family: "Marcellus", serif;
  margin-top: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
}

.card-wrapper > img {
  width: 300px;
  margin: 1rem auto;
}

.naslov {
  font-size: 20px;
  font-weight: bold;
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

.naslov-modal {
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