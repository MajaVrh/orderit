<template>
    <div v-if="item">
        <p style="color: white">{{item.ime}}</p>
        <p style="color: white">{{item.cijena}}HRK x {{amountS}}</p>
        <button @click="removeItem" style="margin-left: 1rem">SMANJI PROIZVOD</button>
        <button @click="addItem" style="margin-left: 1rem">POVECAJ PROIZVOD</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    
    name: 'CartItem',
    props: {
        id: String,
        ime: String,
        cijena: String,
        amount: Number,
    },
    data() {
        return {
            item: this.$store.getters['getCart'].find(item => item.id == this.id),
            amountS: this.$store.getters['getCart'].find(item => item.id == this.id).amount || 0
        }
    },
    methods: {
        ...mapActions({setItemToCart: 'setItemToCart'}),
    addItem() {
        const newAmount = this.item.amount + 1 
        this.setItemToCart({item: {id: this.id}, amount: newAmount})
        this.amountS = this.$store.getters['getCart'].find(item => item.id == this.id).amount
        },
    removeItem() {
        const newAmount = this.item.amount - 1
        this.setItemToCart({item: {id: this.id, ime: this.ime, cijena: this.cijena, amount: this.amount}, amount: newAmount})
        this.amountS = newAmount
        if(newAmount <= 0){
            this.amountS = null
        }
        }
    }
}
</script>

<style>

</style>