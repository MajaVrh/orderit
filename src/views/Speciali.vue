<template>
  <div>
    <image-frame :info="path" :TitleConnect="title" />
    <special-cards
      v-for="ponuda in ponude"
      :key="ponuda.id"
      :infospec="ponuda"
    />
    <order-button/>
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame";
import SpecialCards from "@/components/SpecialCards";
import OrderButton from '../components/OrderButton.vue';
export default {
  name: "Specials",
  components: {
    ImageFrame,
    SpecialCards,
    OrderButton,
  },
  data() {
    return {
      path: "https://picsum.photos/100",
      title: "Speciali",
      ponude: [
        {
          id: "1",
          cijena: "12.00kn",
          slika1: "https://picsum.photos/id/1/100",
          slika2: "https://picsum.photos/id/2/100",
        },
        {
          id: "2",
          cijena: "14.00kn",
          slika1: "https://picsum.photos/id/3/100",
          slika2: "https://picsum.photos/id/4/100",
        },
      ],
    };
  },
};
</script>

<style>
</style>