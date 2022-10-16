<template>
    <button class="button" :style="getCssColor">
        <slot/>
    </button>
</template>
  
<script lang="ts">
    const colorPalette = {
        add: {color:'#344B9D', icon: "['fas','plus']"},
        edit: {color:'#FF8C00',icon:"['fas','pen']"},
        delete: {color:'#FF4500',icon:"['fas','trash']"}
    }

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ConfiguratorElementButton',
        props:{
            color:{
                type: /** @type {import('vue').PropType<keyof colorPalette> */(String),
                default: 'add',
                validator:(/**@type {string} */ color: string) => color in colorPalette
            }
        },
        computed: {
            getCssColor(){
                return {
                    '--button-border-color': colorPalette[this.color as keyof typeof colorPalette].color,
                    '--button-hover-background-color': colorPalette[this.color as keyof typeof colorPalette].color
                }
            }
        }
    });

</script>

<style scoped>

.button{
    background-color: white;
    border : 2px solid;
    border-color: var(--button-border-color);
    border-radius: 30px;
    color:var(--button-border-color);
    width:30px;
    height: 30px;
    margin: 5px;
}

.button:hover{
    background-color: var(--button-hover-background-color);
    color: white;
}

</style>
