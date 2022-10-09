<template>
    <div class="container">
        <button @click="simulateCart">Simulate cart</button>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore } from '../store';
    import { Product } from '../store';

    export default defineComponent({
        name: 'BillPage',
        data(){
            return {
                store: useStore(),
                cart: new Array<Product>(),
            }
        },
        methods:{
            async getCart(){
                let array = [{urlId: "PB00340585", category:"aio_coolers"},{urlId: "PB00505045", category: "graphic_cards"},{urlId: "PB00346166", category: "motherboards"},{urlId: "PB00493654", category: "processeurs"},{urlId: "PB00400847", category: "psu"},{urlId: "PB00271616", category: "ram"}]
                let cart = new Array<Product>();
                for (const element of array) {
                    let product = await this.store.dispatch("getProduct",element)
                    cart.push(product)
                }
                this.cart = cart
            },
            async simulateCart(){
                await this.getCart();
                console.log(this.cart)
            }
        }
    });
</script>
  
<style scoped>

</style>
  