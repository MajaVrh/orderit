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
    
  name: "Bezalkohol Napitci",
  components: {
    ImageFrame,
    PicaCards,
    OrderButton,
},
data() {
    return {
      proizvodi: [
        { ime: "Caj", cijena: "12.00kn" },
        { ime: "Espresso", cijena: "9.00kn" },
        { ime: "Machiato", cijena: "10.00kn" },
        { ime: "Topla čokolada", cijena: "15.00kn" },
      ],
      path: "https://picsum.photos/100",
      title: "Topli napitci",

    };
  },
};
</script>

<style>
</style>