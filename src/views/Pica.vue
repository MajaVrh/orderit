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
  name: "Drinks",
  components: {
    SubBar,
    ImageFrame,
  },
  data() {
    return {
      buttons: [
        { description: "Topli napici", routes: "toplinapitci" },
        { description: "Bezalkoholna pića", routes: "bezalkoholnapica" },
        { description: "Alkoholna pića", routes: "alkoholnapica" },
        { description: "Kokteli", routes: "kokteli" },
      ],
      path: "https://picsum.photos/100",
      title: "Pića",

    };
  },
};
</script>

<style>
</style>