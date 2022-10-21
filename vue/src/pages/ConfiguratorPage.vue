<template>
    <div class="Bigcontainer">
        <ConfiguratorComponent></ConfiguratorComponent>
        <SummaryComponent></SummaryComponent>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorComponent from './ConfiguratorComponent.vue';
    import SummaryComponent from './SummaryComponent.vue';

    export default defineComponent({
    name: 'ConfiguratorPage',
    components: {
        ConfiguratorComponent,
        SummaryComponent
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