<template>
    <div class="container">
        <div class="Elements">
        <ConfiguratorElement :product=getProcesseur category="Processeur" image="Processeur.png"></ConfiguratorElement>
        <ConfiguratorElement :product=getCooler category="Ventirad" image="Ventirad.png"></ConfiguratorElement>
        <ConfiguratorElement :product=getMotherboard category="Carte mère" image="CarteMere.png"></ConfiguratorElement>
        </div>
        <div class="Elements" id="MiddleElement">
        <div class="space"></div>
        <ConfiguratorElement :product=getRam category="Mémoire vive" image="MemoireVive.png"></ConfiguratorElement>
        <div class="space"></div>
        </div>
        <div class="Elements">
        <ConfiguratorElement :product=getGraphicCard category="Carte Graphique" image="CarteGraphique.png"></ConfiguratorElement>
        <ConfiguratorElement :product=getCase category="Boitier" image="Boitier.png"></ConfiguratorElement>
        <ConfiguratorElement :product=getPsu category="Alimentation" image="Alimentation.png"></ConfiguratorElement>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ConfiguratorElement from './ConfiguratorElement.vue';
import { Product } from '../store';

export default defineComponent({
    name: "ConfiguratorComponent",
    components: { ConfiguratorElement },
    props:{
        basket: {
            type: Object,
            default: null
        }
    },
    computed:{
        getProcesseur(){
            let product = this.basket.filter((el: Product) => el.category == "processeur")
            if(product.length>0){
                return product[0]
            }else{return null}
        },
        getCooler(){
            let product = this.basket.filter((el: Product) => el.category == "aio_cooler")
            if(product.length>0){
                return product[0]
            }else{return null}
        },
        getGraphicCard(){
            let product = this.basket.filter((el: Product) => el.category == "graphic_card")
            if(product.length>0){
                return product[0]
            }else{return null}
        },
        getMotherboard(){
            let product = this.basket.filter((el: Product) => el.category == "motherboard")
            if(product.length>0){
                return product[0]
            }else{return null}
        },
        getPsu(){
            let product = this.basket.filter((el: Product) => el.category == "psu")
            if(product.length>0){
                return product[0]
            }else{return null}
        },
        getRam(){
            let product = this.basket.filter((el: Product) => el.category == "ram")
            if(product.length>0){
                return product[0]
            }else{return null}
        },
        getCase(){
            let product = this.basket.filter((el: Product) => el.category == "case")
            if(product.length>0){
                return product[0]
            }else{return null}
        }
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width:50%;
        margin: 10px;
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


