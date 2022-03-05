<template>
  <div>
    <div class="linija2"></div>
    <div class="stavka">
      <div class="Naziv">{{ Naziv }}</div>
      <div class="Kolicina">{{Kolicina}}</div>
      <div class="Cijena">{{Cijena}} kn</div>
    </div>
  </div>
</template>

<script>

export default {
    name: "StavkaNarudzbe",
      props:{Naziv: String,
           Kolicina: Number,
           Cijena: Number
           }
};
</script>

<style>
.stavka {
  display: flex;
  margin-top: 0.5rem;
}
.Cijena {
  display: flex;

  width: 40%;
  justify-content: flex-end;
}

.Naziv {
  display: flex;

  width: 40%;
  justify-content: flex-start;
}

.Kolicina {
  display: flex;
  justify-content: center;

  width: 15%;
}

.linija2 {
  background-color: rgba(255, 255, 255, 0.281);
  width: 95%;
  height: 0.5px;

  margin-top: 0.5rem;
}</style>
