<template>
  <div v-if="item">
    <div class="wrapper">

      <p>{{ item.ime }}</p>

      <div class="fuse">

        <div @click="removeItem">
          <i class="fas fa-minus"></i>
        </div>

        <p class="broj">{{ amountS }} </p>

        <div @click="addItem">
          <i class="fas fa-plus"></i>
        </div>

      </div>

      <p>{{ item.cijena * item.amount }} kn</p>

    </div>
    <hr>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "CartItem",
  props: {
    id: String,
    ime: String,
    cijena: Number,
    amount: Number,
  },
  data() {
    return {
      item: this.$store.getters["getCart"].find((item) => item.id == this.id),
      amountS:
        this.$store.getters["getCart"].find((item) => item.id == this.id)
          .amount || 0,
    };
  },
  methods: {
    ...mapActions({ setItemToCart: "setItemToCart" }),
    ...mapMutations({addPrice: 'addPrice', removePrice: 'removePrice'}),
    addItem() {
      const newAmount = this.item.amount + 1;
      this.setItemToCart({ item: { id: this.id }, amount: newAmount });
      const ukupno = Number(this.item.cijena) * 1;
      this.addPrice(ukupno)
      this.amountS = this.$store.getters["getCart"].find(
        (item) => item.id == this.id
      ).amount;
    },
    removeItem() {
      const newAmount = this.item.amount - 1;
      const ukupno = this.item.cijena * 1;
      console.log(ukupno)
      this.removePrice(ukupno)
      this.setItemToCart({
        item: {
          id: this.id,
          ime: this.ime,
          cijena: this.cijena,
          amount: this.amount,
        },
        amount: newAmount,
      });
      this.amountS = newAmount;
      if (newAmount <= 0) {
        this.amountS = null;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  color: white;
  font-size: 1.1rem;
  font-family: "Marcellus", serif;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr 1fr;

}


.fuse{
  display: grid;
  grid-auto-flow: column;
}
hr{
  margin: 1rem 2rem 0rem 2rem;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  height: 1px;

}
i{
  font-size: 0.7rem;
}
</style>