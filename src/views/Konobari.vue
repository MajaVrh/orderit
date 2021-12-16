<template>
  <div class="container">
    <sidebar />
    <div class="sredina">
      <h1 class="naslovStranice">Konobari</h1>
      <div class="raspored">
        <konobar />
        <konobar />
        <konobar />
        <konobar />
        <dodavanjeZaposlenika />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Konobar from "@/components/Konobar";
import dodavanjeZaposlenika from "@/components/dodavanjeZaposlenika";

export default {
  name: "Konobari",
  components: { Sidebar, Konobar, dodavanjeZaposlenika },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
}

.sredina {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem auto;
}

.raspored {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.naslovStranice {
  font-family: "Amatic SC", cursive;
  font-size: 60px;
  color: #731642;
  font-weight: bold;
}
</style>
