<template>
    <div class="container">
        <h1>{{getCategoryName}}</h1>
        <div class="SearchBar">
            <input class="searchingBar" type="text" v-model="searchQuery" placeholder="Search your product..."/>
            <p class="searchBarIcon"><font-awesome-icon id="search" :icon="['fas','search']"/></p>
        </div>
        <div class="containerTable">
            <table>
                <tr v-for="product in filteredProducts" :key="product.urlId">
                    <td>
                        <img :src=product.image >
                    </td>
                    <td>
                        <strong>{{product.name}}</strong>
                        <br>
                        {{product.extendedName}}
                    </td>
                    <td>
                        <strong>
                        {{product.price}} {{product.currency}}
                        </strong>
                    </td>
                    <td>
                        <input type="radio" name="choice" v-model="choosenProduct" v-bind:value="product"/>
                    </td>
                </tr>
            </table>
        </div>
        <button @click="validateChoice" class="myButton" >Valider</button>
        <button @click="returnToConfigurator" class="myButton" >Retour</button>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore, Product } from '../store'
    const categoryNames = {
        processeurs: "Processeurs",
        aio_coolers: "Ventirad",
        graphic_cards: "Cartes Graphiques",
        motherboards: "Cartes mères",
        psu: "Alimentations",
        ram: "Mémoire vive",
        cases: "Boitiers"
    }

    const categorySingleNames = {
        processeurs: "processeur",
        aio_coolers: "aio_cooler",
        graphic_cards: "graphic_card",
        motherboards: "motherboard",
        psu: "psu",
        ram: "ram",
        cases: "case"
    }
    export default defineComponent({
    name: 'ConfiguratorChoicePage',
    data(){
        return{
            store: useStore(),
            products: new Array<Product>(),
            choosenProduct: {
                type: Object,
                default: null
            },
            searchQuery:''
        }
    },
    mounted(){
        this.getProducts()
    },
    methods:{
        async getProducts(){
            this.products = await this.store.dispatch("getProducts",this.$route.params.category)
        },
        validateChoice(){
            if(this.$route.params.type=="edit"){ //edit
                let product = this.store.getters["getBasket"].filter((el: Product) => el.category == categorySingleNames[this.$route.params.category as keyof typeof categorySingleNames])
                console.log(product[0])
                this.store.commit("deleteProduct", product[0])
            }
            this.store.commit("addProduct", this.choosenProduct)
            this.$router.push("/configurator")
        },
        returnToConfigurator(){
            this.$router.push("/configurator")
        }
        
    },
    computed:{
        getCategoryName(){
            return categoryNames[this.$route.params.category as keyof typeof categoryNames]
        },
        filteredProducts(): Array<Product>{
            return this.products.filter((el: Product) => el.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }   
    }
    });
</script>


<style scoped>

.myButton{
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

.myButton:hover{
    background-color: #344B9D;
    color: white;
    cursor: pointer;
}

img{
    width:200px;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.containerTable{
    overflow-y: scroll;
    max-height: 650px;
    width: 85%;

}

.SearchBar{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}
.searchingBar{
    border: 5px solid #344B9D;
    border-radius: 5px;
    height: 30px;
    width: 50%;
    margin:10px;
}

.searchBarIcon{
    color:#344B9D ;
    font-size: 30px;

}


table{
    width: 100%;
}

</style>
