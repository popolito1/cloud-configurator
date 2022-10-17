<template>
    <div class="panier">
        <h1>{{getCategory}} :</h1>
        <div class="categories">
            <p>{{product.name}}</p>
            <p id="price">{{product.price}} {{product.currency}}</p>
            <ConfiguratorElementButton @click=deleteProduct() color="delete"> 
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
    name: 'SummaryElement',
    components:{
        ConfiguratorElementButton
    },
    props:{
        product: {
            type: Object,
            default: null
        },
    },
    data(){
        return{
            store: useStore()
        }
    },
    computed:{
        getCategory(){
            if(this.product!=null){
                switch (this.product.category) {
                    case "aio_cooler":
                        return "Ventirad";
                    case "graphic_card":
                        return "Carte graphique";
                    case "motherboard":
                        return "Carte mère";
                    case "processeur":
                        return "Processeur";
                    case "psu":
                        return "Alimentation";
                    case "ram":
                        return "Mémoire Vive";
                    default:
                        return this.product.category;
                }
            }else{
                return ""
            }
        }
    },
    methods:{
        deleteProduct(){
            this.store.commit('deleteProduct',this.product)
        }
    }
    });
</script>


<style scoped>

.panier{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 120px;
    background: rgba(52, 75, 157, 0.1);
    border-radius: 100px;
    margin : 30px;
}

h1{
    font-size: medium;
}

.categories{
    margin-top: 5px;
}

#price{
    font-weight: bold;
    color:#344B9D;
}


</style>
