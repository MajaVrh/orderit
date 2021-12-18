<template>
  <div class="home">

    <main-bars
      v-for="button in buttons"
      :key="button.image"
      :IsLeft="buttons.indexOf(button) % 2 == 0"
      :info="button"
    />
  </div>
</template>

<script>
import MainBars from "@/components/MainBar";

export default {
  name: "Home",
  components: {
    MainBars,
  },
  data() {
    return {
      buttons: [
        {
          image: "https://picsum.photos/id/1/100",
          description: "Pića",
          route: "pica",
        },
        {
          image: "https://picsum.photos/id/2/100",
          description: "Slastice",
          route: "slastice",
        },
        {
          image: "https://picsum.photos/id/3/100",
          description: "Special",
          route: "speciali",
        },
        {
          image: "https://picsum.photos/id/4/100",
          description: "Info",
          route: "info",
        },
      ],
    };
  },
};
</script>
