<template>
  <div>
    <div class="wrapper" @click="isModalVisible = !isModalVisible; number = 0">
      <div class="middle">
        <img :src="infospec.slika1" alt="" /> <i class="fas fa-plus"></i
        ><img :src="infospec.slika2" alt="" /><i class="fas fa-equals"></i>
        <p>{{ infospec.cijena }}</p>
      </div>
    </div>
    <div class="modal" v-if="isModalVisible">
      <div class="modal-contant" @click="isModalVisible = !isModalVisible">
        <p class="naslov-modal">
          {{ infospec.ime1 }}
        </p>
        <p class="naslov-modal">
          +
        </p>
        <p class="naslov-modal" style="margin-bottom: 10px">
          {{ infospec.ime2 }}
        </p>
        <p class="head">Opis</p>
        <p>{{ infospec.proizvod1 }}</p>
        <p style="margin-bottom: 10px">{{ infospec.proizvod2 }}</p>
        <p class="head">Količina</p>
        <div class="increment" style="margin-bottom: 10px">
          <span @click="() => (number - 1 < 0 ? (number = 0) : number--)"
            ><i class="fas fa-minus"></i></span
          ><span>{{ number }}</span
          ><span @click="() => number++"><i class="fas fa-plus"></i></span>
        </div>
        <p class="head">Cijena</p>
        <p style="margin-bottom: 10px">{{ infospec.cijena }}</p>
        <div class="button">Dodaj</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialCards",
  props: {
    infospec: Object,
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
    logMeHard() {
      console.log("Test");
    }
    
  },

};
</script>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.65);
  padding: 0.8rem;
  margin-top: 1rem;
  color: white;
}
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.middle > img,
.middle > i {
  margin: 8px;
}

.middle > i {
  font-size: 12px;
}
.middle > p {
  font-size: 20px;
  font-family: "Marcellus", serif;
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
.naslov-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;

}
</style>