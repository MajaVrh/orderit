<template>
  <div>
    <image-frame :info="path" :TitleConnect="title" />
    <sweat-cards
      v-for="slasticainfo in slasticeinfo"
      :key="slasticainfo.proizvod"
      :infoslad="slasticainfo"
    />
    <order-button/>
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame.vue";
import SweatCards from "@/components/SweetCards.vue";
import OrderButton from '../components/OrderButton.vue';
export default {
  name: "Sweats",
  components: {
    ImageFrame,
    SweatCards,
    OrderButton
  },
  data() {
    return {
      path: "https://picsum.photos/100",
      title: "Slastice",

      slasticeinfo: [
        {
          proizvod: "Čokoladna torta",
          slika: "https://picsum.photos/id/10/100",
          cijena: "12.00kn",
          opis: "Torta od čokolade"
        
        },
        {
          proizvod: "Voćna torta",
          slika: "https://picsum.photos/id/11/100",
          cijena: "14.00kn",
          opis: "Torta od Jagode, marelice i banana"
        },
      ],
    };
  },
};
</script>

<style>
</style>