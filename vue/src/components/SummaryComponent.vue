<template>
    <div class="container">
        <div>
            <h2>Récapitulatif</h2>
        </div>
        <div class="containerSummary">
            <SummaryElement v-for="product in basket" :key="product.urlId" :product="product"/>
        </div>
        <div>
            <p id="price">Total : {{getTotalPrice}} €</p>
            <button class="buttons" @click=deleteAllProduct() >Vider</button>
            <button class="buttons">Valider</button>
        </div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import SummaryElement from './SummaryElement.vue'
    import { useStore } from '../store'

    export default defineComponent({
    name: 'SummaryComponent',
    data(){
        return{
            store: useStore()
        }
    },
    components : {
        SummaryElement
    },
    props:{
        basket: {
            type: Object,
            default: null
        }
    },
    computed:{
        getTotalPrice(){
            let sum =0;
            for (let i=0;i<this.basket.length;i++){
                sum = sum + this.basket[i].price;
            }
            return sum;
        }
    },
    methods:{
        deleteAllProduct(){
            this.store.commit('deleteAllProduct');
        }
    }
    });
</script>


<style scoped>

    .container{
        width: 50%;
        margin-left: 60px;
    }
    .containerSummary{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        max-height: 500px;
        border-left: solid 10px ;
        border-color: rgba(82, 98, 155, 0.6)  transparent  transparent rgba(52, 75, 157, 0.6);
        
    }
    .buttons{
    background-color: white;
    border : 2px solid;
    border-color: #344B9D;
    border-radius: 30px;
    color:black;
    width:100px;
    height: 50px;
    margin: 5px;
    font-weight: bold;
    font-size:medium;
}

.buttons:hover{
    background-color: #344B9D;
    color: white;
    cursor: pointer;
}

#price{
    font-weight: bold;
}

</style>
