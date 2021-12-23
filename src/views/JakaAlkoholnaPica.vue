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
  name: "Jakaalkoholnapića",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,

  },
  data() {
    return {
      proizvodi: [
        { ime: "Krušovac", cijena: "15.00kn", informacije: "0.25ml" },
        { ime: "Medenica", cijena: "13.00kn", informacije: "0.25ml" },
        { ime: "Borovniček", cijena: "12.00kn", informacije: "0.25ml" },
        { ime: "Jack Daniels", cijena: "18.00kn", informacije: "0.35ml" },
      ],

      path: "https://picsum.photos/100",
      title: "Jaka alkoholna pića",
    };
  },
};


</script>

<style>
</style>

