<template>
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
            <th class="photo"> <img :src="product.image"  /> </th>
            <th>
              <div class="containerDescription">
                <div class="rate">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label for="star5" title="text">5 stars</label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label for="star3" title="text">3 stars</label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label for="star2" title="text">2 stars</label>
                  <input type="radio" id="star1" name="rate" value="1" />
                  <label for="star1" title="text">1 star</label>
                </div>
                <div class="description">{{product.description}}</div>
              </div>
            </th>
            

            <th >
              <div class="container_price">
                <div class="price">
                  {{product.price}} {{product.currency}}
                </div>
                <br/>
                <button>Configurate your PC with this product</button>
              </div>
            </th>
          </tr>
        </table>
      </div>
  </div>
  <ContainerDataSheet/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, Product } from '../store'
import ContainerDataSheet from './ContainerDataSheet.vue'

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
    getProduct(){
      this.store.dispatch("getProduct",{category:'processeurs', urlId:"PB00493654"})
        .then(data => this.product = data)
    }

  },
  mounted(){
    this.getProduct();
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

.rate {
    margin-left: auto;
    margin-right: auto;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
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
