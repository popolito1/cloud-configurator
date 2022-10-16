<template>
    <div class="Bigcontainer">
        <ConfiguratorComponent :basket="basket"></ConfiguratorComponent>
        <SummaryComponent :basket="basket"></SummaryComponent>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorComponent from './ConfiguratorComponent.vue';
    import SummaryComponent from './SummaryComponent.vue';
    import { useStore, Product } from '../store'

    export default defineComponent({
    name: 'ConfiguratorPage',
    components: {
        ConfiguratorComponent,
        SummaryComponent
    },
    data(){
        return{
            store: useStore(),
            basket: new Array<Product>()
        }
    },
    mounted(){
        this.getBasket();
    },
    methods:{
        async getBasket(){
            let array = [{urlId: "PB00505045", category: "graphic_cards"},{urlId: "PB00346166", category: "motherboards"},{urlId: "PB00493654", category: "processeurs"},{urlId: "PB00400847", category: "psu"},{urlId: "PB00271616", category: "ram"}]
            for (const element of array) {
                let product = await this.store.dispatch("getProduct",element)
                this.basket.push(product)
            }
        }
    }
    });
</script>


<style scoped>
.Bigcontainer{
    display:flex;
    flex-direction: row;
    justify-content: space-between;

}
</style>
