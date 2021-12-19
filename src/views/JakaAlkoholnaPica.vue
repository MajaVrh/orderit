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
  name: "Jaka alkoholna pića",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,

  },
  data() {
    return {
      proizvodi: [
        { ime: "Krušovac", cijena: "15.00kn" },
        { ime: "Medenica", cijena: "13.00kn" },
        { ime: "Borovniček", cijena: "12.00kn" },
        { ime: "Jack Daniels", cijena: "18.00kn" },
      ],

      path: "https://picsum.photos/100",
      title: "Jaka alkoholna pića",
    };
  },
};


</script>

<style>
</style>

