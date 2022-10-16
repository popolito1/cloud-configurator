<template>
    <div class="container">
        <div class="Elements">
        <ConfiguratorElement category="Processeur" image="Processeur.png"></ConfiguratorElement>
        <ConfiguratorElement category="Ventirad" image="Ventirad.png"></ConfiguratorElement>
        <ConfiguratorElement category="Carte mère" image="CarteMere.png"></ConfiguratorElement>
        </div>
        <div class="Elements" id="MiddleElement">
        <div class="space"></div>
        <ConfiguratorElement category="Mémoire vive" image="MemoireVive.png"></ConfiguratorElement>
        <div class="space"></div>
        </div>
        <div class="Elements">
        <ConfiguratorElement category="Carte Graphique" image="CarteGraphique.png"></ConfiguratorElement>
        <ConfiguratorElement category="Boitier" image="Boitier.png"></ConfiguratorElement>
        <ConfiguratorElement category="Alimentation" image="Alimentation.png"></ConfiguratorElement>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ConfiguratorElement from './ConfiguratorElement.vue';

export default defineComponent({
    name: "ConfiguratorComponent",
    components: { ConfiguratorElement }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:50%;
    }
    .Elements{
        display: flex;
        margin: 15px;
        width: 100%;
        justify-content: space-between;
    
    }

    .space{
        width: 100px;
    }
</style>


