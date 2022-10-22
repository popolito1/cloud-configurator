<template>
  <div>
    <div class="product">
      <div class="Bigcontainer">
        <div class="title">
          <ul id="titles">
            <li>
              <h1>{{product.name}}</h1>
            </li>
            <li>
              <p2>{{product.extendedName}}</p2>
            </li>
          </ul>
        </div>

        <table class="container">
          <tr>
            <th class="photo"> 
              <img :src="product.image"/> 
            </th>
            <th>
              <div class="containerDescription">
                <div class="description">{{product.description}}</div>
              </div>
            </th>
            <th>
              <div class="container_price">
                <div class="price">
                  {{product.price}} {{product.currency}}
                </div>
                <br/>
                <button>Configure your PC with this product</button>
              </div>
            </th>
          </tr>
        </table>
      </div>
    </div>
    <ContainerDataSheet/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore, Product } from '../store'
  import { getProduct } from '../products'
  import ContainerDataSheet from '../components/ContainerDataSheet.vue'

  export default defineComponent({
    name: 'ContainerProduct',
    components: {
      ContainerDataSheet
    },
    data(){
      return {
        store: useStore(),
        product: {} as Product
      }
    },
    methods:{
      Product(){
        getProduct(this.$route.params.category, this.$route.params.urlId)
        .then(data => this.product = data)
      }
    },
    mounted(){
      this.Product();
    }
    
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin : 20px;
    align-items: center;
    background: rgba(52, 75, 157, 0.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }
  .title{
    display:flex;
    flex-wrap: wrap;
    font-size: small;
  }
  li{
    list-style-type:none;
  }

  .Bigcontainer{
    margin : 50px;
    display : flex;
    flex-wrap: wrap;
  }

  th{
    text-align: center;
    flex-wrap: wrap;
    width:25%;
  }
  .photo{
    border-left: solid 10px ;
    border-color: rgba(82, 98, 155, 0.6)  transparent  transparent rgba(52, 75, 157, 0.6);
    background-color: white;
    border-radius: 20px;
  }

  .containerDescription{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }
  .description{
    font-size: small;
  }

  .container_price{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }
  .price{
    display: flex;
    justify-content: center;
    align-items:center;
    width: 250px;
    height: 150px;
    background: rgba(52, 75, 157, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color:aliceblue;
    font-weight: bold;
    font-size: xx-large;
  }

  button {
    background-color: white;
    padding: 16px 32px;
    color: black; 
    border: 2px solid rgba(52, 75, 157, 0.6);
    font-size: large;
  }
  button:hover {
    background-color: rgba(52, 75, 157, 0.6);
    color: white;
  }


</style>
