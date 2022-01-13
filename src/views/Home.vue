<template>
  <div class="home">
    <main-bars
      v-for="kategorija in kategorije"
      :key="kategorija.image"
      :IsLeft="kategorije.indexOf(kategorija) % 2 == 0"
      :imageURL="kategorija.imageURL"
      :naziv="kategorija.naziv"
    />
    <main-bars naziv="Info" imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU" :isLeft="kategorije.lenght+1 % 2 == 0"/>
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
      kategorije: 
      [
        {
          id: 1,
          naziv: "Pića",
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"
        },
        {
          id: 2,
          naziv: "Slastice",
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"
        },
        {
          id: 3,
          naziv: "Special",
          imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLTD-EEs8bxwuZtNSWPEROeaAu3FvGnlGQ6BhxGc4fuuphh9jJz1OWtJQII7BMUlrCHA&usqp=CAU"
        },
      ]

      // buttons: [
      //   {
      //     image: "https://picsum.photos/id/1/100",
      //     description: "Pića",
      //     route: "pica",
      //   },
      //   {
      //     image: "https://picsum.photos/id/2/100",
      //     description: "Slastice",
      //     route: "slastice",
      //   },
      //   {
      //     image: "https://picsum.photos/id/3/100",
      //     description: "Special",
      //     route: "speciali",
      //   },
      //   {
      //     image: "https://picsum.photos/id/4/100",
      //     description: "Info",
      //     route: "info",
      //   },
      // ],
    };
  },
};
</script>
