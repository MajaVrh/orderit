<template>
  <div>
    <image-frame :info="path" :TitleConnect="title" />
    <pica-cards
      v-for="proizvod in proizvodi"
      :key="proizvod.ime"
      :infocards="proizvod"
    />
    <order-button/>
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame";
import PicaCards from "@/components/PicaCards.vue";
import OrderButton from '../components/OrderButton.vue';
export default {
  name: "BezalkoholnaPića",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,
  },
  data() {
    return {
      proizvodi: [
        { ime: "Mineralna voda", cijena: "9.00kn" },
        { ime: "Fanta", cijena: "13.00kn" },
        { ime: "Coca Cola", cijena: "15.00kn" },
        { ime: "Jucey", cijena: "10.00kn" },
      ],
      path: "https://picsum.photos/100",
      title: "Bezalkoholna Pića",
    };
  },
};
</script>

<style>
</style>