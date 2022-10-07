<template>
  <ContainerProduct 
  name="Intel Core i9-12900K (3.2 GHz / 5.2 GHz)"
  extended-name="Processeur 16-Core (8 Performance-Cores + 8 Efficient-Cores) 24-Threads Socket 1700 Cache 
  L3 30 Mo Intel UHD Graphics 770 0.010 micron (version boîte sans ventilateur - garantie Intel 3 ans)"
  description="Avec les processeurs Alder Lake, Intel signe une petite révolution dans le monde de l'architecture x86 en adoptant une technologie hybride basée 
  sur 2 types de coeurs différents assemblés au sein d'une même puce : Les Performances-Cores et les Efficient-Cores."
  price="829,94€"/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
import ContainerProduct from './components/ContainerProduct.vue';

export default defineComponent({
  name: 'App',
  components: {
    ContainerProduct
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
