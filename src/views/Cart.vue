<template>
  <div>
    <p class="naslov">Vaša narudžba</p>

    <div class="wrapper">
      <p>Naziv</p>
      <p>Količina</p>
      <p>Cijena</p>
    </div>

    <cart-item
      v-for="proizvod in proizvodi"
      :key="proizvod.id"
      :id="proizvod.id"
    />
    <div class="wrapper2">
      <p>Ukupno</p>
      <p></p>
      <p>{{ukupnaCijena}} kn</p>
    </div>
    <div v-if="!potvrdeno" class="tipka" @click="creteOrder">Potvrdi narudžbu</div>
    <div v-else class="tipka">Potvrdena narudžba</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "../components/CartItem";
import {addDoc, collection, doc, db} from '@/firebase'


export default {
  name: "Cart",
  data() {
    return {
      potvrdeno: false
    }
  },
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters({ proizvodi: "getCart", ukupnaCijena: 'getTotalPrice', stol: 'getTable' }),
  },
  mounted() {
    if (this.proizvodi) {
      console.log(this.proizvodi);
    }
  },
  methods: {
    ...mapActions({ setItemToCart: "setItemToCart" }),
    async creteOrder() {
      const newOrder = await addDoc(collection(db, 'narudzbe'), {
        ukupnaCijena: this.ukupnaCijena,
        oznakaStola: this.stol.oznaka,
        createdAt: Date.now()
      })
      
      const orderRef = await doc(collection(db, 'Narudzbe'), newOrder.id)
      const stavkaRef = await collection(orderRef, 'Stavke')
      this.proizvodi.forEach(proizvod => {
        addDoc(stavkaRef, {
          ime: proizvod.ime,
          cijena: proizvod.cijena,
          kolicina: proizvod.amount
        })
      })
      this.potvrdeno = true;
    }
  },
};
</script>

<style scoped>
.naslov {
  color: white;
  font-size: 3rem;
  margin-top: 3rem;
  font-family: "Amatic SC", cursive;
  font-weight: bold;
}
.wrapper {
  display: grid;
  color: white;
  font-size: 1.3rem;
  font-family: "Marcellus", serif;
  margin-top: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
}
.wrapper2 {
  display: grid;
  color: white;
  font-size: 1.1rem;
  font-family: "Marcellus", serif;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
}
.tipka {
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 2rem 5rem 0rem 5rem;
  border-radius: 50px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.733);
  color: black;
  font-family: "Marcellus", serif;
  font-size: 1.2rem;
  padding: 10px;
}
</style>
