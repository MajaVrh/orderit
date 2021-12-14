<template>
  <div class="home">
    <main-bars :IsLeft="true"/>
    <main-bars :IsLeft="false"/>
  </div>
</template>

<script>
import MainBars from "@/components/MainBar";
export default {
  name: "Home",
    components: {
      MainBars,
    }
};
</script>
