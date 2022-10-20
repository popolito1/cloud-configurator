<template>
    <div class="Bigcontainer">
        <ConfiguratorComponent :basket="getBasket"></ConfiguratorComponent>
        <SummaryComponent :basket="getBasket"></SummaryComponent>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorComponent from '../components/ConfiguratorComponent.vue';
    import SummaryComponent from '../components/SummaryComponent.vue';
    import { useStore , Product} from '../store'

    export default defineComponent({
    name: 'ConfiguratorPage',
    components: {
        ConfiguratorComponent,
        SummaryComponent
    },
    data(){
        return{
            store: useStore()
        }
    },
    computed:{
        getBasket(): Array<Product>{
            return this.store.getters["getBasket"];
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
