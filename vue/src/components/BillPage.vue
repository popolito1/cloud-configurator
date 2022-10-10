<template>
    <div class="container">
        <table>
            <tr>
                <td><div class="logotype">Logo</div></td>
                <td><div>Bill</div></td>
                <td></td>
            </tr>
        </table> 
        <br><br>
        <h3>Your contact details</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p><br>
        <table>
            <tr>
                <td>
                    <strong>Date:</strong> {{date}}<br>
                    <strong>Type:</strong> Configurator summary<br>
                </td>
                <td>
                    <strong>E-mail:</strong> firstname@company.com<br>
                    <strong>Phone:</strong> 03 20 14 04 15<br>
                </td>
            </tr>
        </table><br>
        <div class="shoppingIcon"></div> 
        <h3>Your articles</h3>
        <table>
            <tr>
                <td width="40%" class="column-header">Image</td>
                <td width="20%" class="column-header">Article</td>
                <td width="20%" class="column-header">Details</td>
                <td width="20%" class="column-header">Price</td>
            </tr>

            <tr v-for="article in basket" :key="article.urlId">
                <td class="row"><img class="fit-picture" :src="article.image"></td>
                <td class="row">{{article.name}}</td>
                <td class="row">{{article.extendedName}}</td>
                <td class="row">{{article.price}}  {{article.currency}}</td>
            </tr>
        </table><br>
        <table width="100%" style="background:#eee;padding:20px;">
            <tr>
                <td>
                <table width="300px" style="float:right">
                    <tr>
                        <td><strong>Total:</strong></td>    
                        <td style="text-align:right">{{totalPrice}} EUR</td>
                    </tr>
                </table>
                </td>
            </tr>
        </table>
        <div class="alert">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	</div>
        <div class="socialmedia">Follow us online <small>[FB] [INSTA]</small></div>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useStore, Product } from '../store';

    export default defineComponent({
        name: 'BillPage',
        data(){
            return {
                store: useStore(),
                basket: new Array<Product>(),
                date: ''
            }
        },
        created() {
            const today = new Date();
            this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        },
        mounted(){
            this.getBasket();
        },
        methods:{
            async getBasket(){
                let array = [{urlId: "PB00340585", category:"aio_coolers"},{urlId: "PB00505045", category: "graphic_cards"},{urlId: "PB00346166", category: "motherboards"},{urlId: "PB00493654", category: "processeurs"},{urlId: "PB00400847", category: "psu"},{urlId: "PB00271616", category: "ram"}]
                for (const element of array) {
                    let product = await this.store.dispatch("getProduct",element)
                    this.basket.push(product)
                }
            }
        },
        computed: {
            totalPrice: function() {
                let price = 0;
                this.basket.forEach(element => {
                    price += element.price
                });
                return price
            }
        }
    });
</script>
  
<style scoped>

</style>
  