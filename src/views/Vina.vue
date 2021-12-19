<template>
  <div>
    <image-frame :info="path" :TitleConnect="title" />
    <pica-cards
      v-for="proizvod in proizvodi"
      :key="proizvod.ime"
      :infocards="proizvod"
    />

    <order-button />
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame";
import PicaCards from "@/components/PicaCards.vue";
import OrderButton from "@/components/OrderButton.vue";

export default {
  name: "Vina",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,

  },
  data() {
    return {
      proizvodi: [
        { ime: "Rose", cijena: "15.00kn" },
        { ime: "Malvazija", cijena: "13.00kn" },
        { ime: "Merlot", cijena: "12.00kn" },
        { ime: "Teran", cijena: "18.00kn" },
      ],

      path: "https://picsum.photos/100",
      title: "Alkoholna Pića",
    };
  },
};


</script>

<style>
</style>

