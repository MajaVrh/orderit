<template>
    <div>
        <cart-item v-for="proizvod in proizvodi" :key="proizvod.id" :id="proizvod.id" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartItem from "../components/CartItem"
export default {
    name: 'Cart',
    components: {
        CartItem
    },
    computed: {
        ...mapGetters({proizvodi: 'getCart'})
    },
    mounted() {
        if(this.proizvodi) {
            console.log(this.proizvodi)
        }
    },
    methods: {
        ...mapActions({setItemToCart: 'setItemToCart'},)
    }
}
</script>

<style>

</style>
