<template>
    <div class="containerElement">
        <img :src="require(`@/assets/configuratorElements/${image}`)">
        <h2>{{category}}</h2>
        <div class="buttons">
            <ConfiguratorElementButton v-if="product==null" color="add">
                <font-awesome-icon :icon="['fas','plus']"/>
            </ConfiguratorElementButton>
            <ConfiguratorElementButton v-if="product!=null" color="edit">
                <font-awesome-icon :icon="['fas','pen']"/>
            </ConfiguratorElementButton>
            <ConfiguratorElementButton v-if="product!=null" color="delete">
                <font-awesome-icon :icon="['fas','trash']"/>
            </ConfiguratorElementButton>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorElementButton from './ConfiguratorElementButton.vue';

    export default defineComponent({
        name: 'ConfiguratorElement',
        data(){
            return {
                product: null
            }
        },
        components:{
            ConfiguratorElementButton
        },
        props: {
            category: String,
            image: String
        }
    });

</script>

<style scoped>

.buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


img{
    width: 100px;
}
.containerElement{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
}
</style>
