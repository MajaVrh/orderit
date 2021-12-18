<template>
  <div>
    <image-frame :info="path" :TitleConnect="title" />
    <div class="WrapperInfo">
      <p class="title">Central Perk Coffe Shop</p>
      <div class="align">
        <i class="fas fa-map-marker-alt"></i>
        <p>Lokacija</p>
      </div>
      <p>{{ information.lokacija }}</p>
      <div class="align">
        <i class="fas fa-phone"></i>
        <p>Kontakt</p>
      </div>
      <p>{{ information.kontakt }}</p>
      <div class="align">
        <i class="fas fa-clock"></i>
        <p>RADNO VRIJEME</p>
      </div>

      <div class="wrapper-info">
        <div class="left">
          <span>PON - PET:</span>
          <span>SUB:</span>
          <span>NED:</span>
        </div>

        <div class="right">
          <p class="align-time" v-for="time in times" :key="time.dan">
            {{ time.pocetak }} - {{ time.kraj }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageFrame from "@/components/ImageFrame.vue";

export default {
  name: "Info",
  components: {
    ImageFrame,
  },
  data() {
    return {
      path: "https://picsum.photos/100",
      title: "Info",
      times: [
        { dan: "PON-PET", pocetak: "8:00", kraj: "23:00" },
        { dan: "SUB", pocetak: "8:00", kraj: "01:00" },
        { dan: "NED", pocetak: "8:00", kraj: "20:00" },
      ],
      information: {
        lokacija: "Rovinjska ul. 14 52100, Pula",
        kontakt: "091 852 1234",
      },
    };
  },
};
</script>

<style scoped>
.WrapperInfo {
  background-color: rgba(0, 0, 0, 0.65);
  padding: 2rem 1rem;
  font-family: "Marcellus", serif;
  color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.align > i,
.align > span {
  margin-right: 1rem;
}
.align {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
}

.wrapper-info {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1rem;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
