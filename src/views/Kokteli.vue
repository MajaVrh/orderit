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
import OrderButton from "../components/OrderButton.vue";
export default {
  name: "Kokteli",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,
  },
  data() {
    return {
      proizvodi: [
        { ime: "Margerita", cijena: "25.00kn", informacije: "0.5l" },
        { ime: "Sex on the beach", cijena: "26.00kn", informacije: "0.55l" },
        { ime: "Mohito", cijena: "20.00kn", informacije: "0.5l" },
        { ime: "Hugo", cijena: "23.00kn", informacije: "0.45l" },
      ],
      path: "https://picsum.photos/100",
      title: "Kokteli",
    };
  },
};
</script>

<style>
</style>