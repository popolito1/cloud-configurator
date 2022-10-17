<template>
    <div class="containerElement">
        <img :src="require(`@/assets/configuratorElements/${image}`)">
        <h2>{{category}}</h2>
        <div class="buttons">
            <ConfiguratorElementButton @click= addProduct() v-if="product==null" color="add">
                <font-awesome-icon :icon="['fas','plus']"/>
            </ConfiguratorElementButton>
            <ConfiguratorElementButton v-if="product!=null" color="edit">
                <font-awesome-icon @click=editProduct() :icon="['fas','pen']"/>
            </ConfiguratorElementButton>
            <ConfiguratorElementButton @click=deleteProduct() v-if="product!=null" color="delete">
                <font-awesome-icon :icon="['fas','trash']"/>
            </ConfiguratorElementButton>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import ConfiguratorElementButton from './ConfiguratorElementButton.vue';
    import { useStore } from '../store'

    export default defineComponent({
        name: 'ConfiguratorElement',
        data(){
        return{
            store: useStore()
            }
        },
        components:{
            ConfiguratorElementButton
        },
        props: {
            category: String,
            image: String,
            product: {
                type: Object,
                default: null
            }
        },
        methods:{
            addProduct(){
                let categoryName;
                switch (this.category) {
                    case "Ventirad":
                        categoryName="aio_coolers";
                        break;
                    case "Carte graphique":
                        categoryName="graphic_cards";
                        break;
                    case "Carte mère":
                        categoryName="motherboards";
                        break;
                    case "Processeur":
                        categoryName="processeurs";
                        break;
                    case "Alimentation":
                        categoryName="psu";
                        break;
                    case "Mémoire vive":
                        categoryName="ram";
                        break;
                    case "Boitier":
                        categoryName="cases";
                        break;
                    default:
                        categoryName=this.category;
                        break;
                }
                this.$router.push("/configurator/"+categoryName+"/add");
            },
            deleteProduct(){
                this.store.commit('deleteProduct',this.product)
            },
            editProduct(){
                let categoryName;
                switch (this.category) {
                    case "Ventirad":
                        categoryName="aio_coolers";
                        break;
                    case "Carte graphique":
                        categoryName="graphic_cards";
                        break;
                    case "Carte mère":
                        categoryName="motherboards";
                        break;
                    case "Processeur":
                        categoryName="processeurs";
                        break;
                    case "Alimentation":
                        categoryName="psu";
                        break;
                    case "Mémoire vive":
                        categoryName="ram";
                        break;
                    case "Boitier":
                        categoryName="cases";
                        break;
                    default:
                        categoryName=this.category;
                        break;
                }
                this.$router.push("/configurator/"+categoryName+"/edit");
            }
            
        },
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
