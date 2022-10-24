<template>
    <div>
        <img :src="require('@/assets/logo.png')" alt="Logo">
        <HomePageComponent  v-for="componentPage in categories" :key="componentPage" :componentPage="componentPage"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import HomePageComponent from '../components/HomePageComponent.vue';
    
    export default defineComponent({
        name: 'HomePage',
        components:{
            HomePageComponent
        },
        data() {
        return {
            categories: ["Products", "Configurator"]
        };
    },
    })
</script>


