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
          ime1: "macchiato",
          ime2: "cedevita",
          cijena: "12kn",
          proizvod1: "macchiato: 0.4l",
          proizvod2: "cedevita: 0.7l",
          slika1: "https://picsum.photos/id/1/100",
          slika2: "https://picsum.photos/id/2/100",
        },
        {
          id: "2",
          ime1: "macchiato",
          ime2: "cheesecake",
          cijena: "14kn",
          proizvod1: "macchiato: 0.4l",
          proizvod2: "cheesecake: torta sa slatkim sirom",
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