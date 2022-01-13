<template>
  <div v-if="podkategorije">
    <image-frame :info="path" :TitleConnect="title" />
    <sub-bar
      v-for="button in buttons"
      :key="button.description"
      :info="button"
    />
  </div>
  <div v-else>
    <!-- Tu ako nema podkategorije direktno prikazati ponudu -->
  </div>
</template>

<script>
import SubBar from "@/components/SubBar";
import ImageFrame from "@/components/ImageFrame";
import { db } from "@/firebase"

export default {
  name: "GeneralView",
  components: {
    SubBar,
    ImageFrame,
  },
  created() {
    this.fetchFirebaseData();
  },
  methods: {
     async fetchFirebaseData() {
      const id = this.$route.params.id
       let rezultati = await getDoc(db, "kategorije", id)
       let kategorijeArr = []
       let ponudaArr = []
       rezultati.forEach(doc => {
        kategorijeArr.push({id: doc.id(), ...doc.data()})
      });
     }
    //   this.podkategorije = kategorijeArr

    //   if(this.podkategorije.length != 0) return
    //   rezultati = await getDoc(db, "ponuda", id)

    //   rezultati.forEach(doc => {
    //     ponudaArr.push({id: doc.id(), ...doc.data()})
    //   });
    //   this.ponuda = ponudaArr
    // }
  },

  data() {
    return {
      podkategorije: [
        {
          id: 1,
          naziv: "Alkholna pića",
        },
        {
          id: 2,
          naziv: "Bezalkoholna pića",
        },
        {
          id: 3,
          naziv: "Topli napitci",
        },
        {
          id: 4,
          naziv: "Kokteli",
        },
      ],
      ponuda: [
        {
          id: 1,
          ponuda: "Kava + Cedevita",
          cijena: 10,
        },
        {
          id: 2,
          ponuda: "Kava + Cedevita",
          cijena: 10,
        },
        {
          id: 3,
          ponuda: "Kava + Cedevita",
          cijena: 10,
        },
      ],
    };
  },
};
</script>

<style>
</style>