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
  name: "Piva",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,

  },
  data() {
    return {
      proizvodi: [
        { ime: "Ožujsko", cijena: "15.00kn", informacije: "0.75l" },
        { ime: "Karlovačko", cijena: "14.00kn", informacije: "0.75l" },
        { ime: "Nikšičko crno", cijena: "18.00kn", informacije: "0.75l" },
        { ime: "Favorit", cijena: "13.00kn", informacije: "0.75l" },
      ],

      path: "https://picsum.photos/100",
      title: "Piva",
    };
  },
};


</script>

<style>
</style>

