<template>
  <div>
    <image-frame :info="path" :TitleConnect="title" />
    <sub-bar
      v-for="button in buttons"
      :key="button.description"
      :info="button"
    />
  </div>
</template>

<script>
import SubBar from "@/components/SubBar";
import ImageFrame from "@/components/ImageFrame";
export default {
  name: "AlkoholnaPica",
  components: {
    SubBar,
    ImageFrame,
  },
  data() {
    return {
      buttons: [
        { description: "Jaka Alkoholna pica", routes: "jakaalkoholnapica" },
        { description: "Vina", routes: "Vina" },
        { description: "Piva", routes: "Piva" },
      ],
      path: "https://picsum.photos/100",
      title: "Alkoholna pića",
    };
  },
};
</script>

<style>
</style>