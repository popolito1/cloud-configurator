
<template>
<div class="dataSheet">
    <div><h1> Fiche Technique</h1></div>
    <table class="tableDataSheet">
        <th>
            <td>Caracteristiques a gauche</td>
            <td>Caracteristique au milieu</td>
            <td>Caracteristique a droite</td>
        </th>

    </table>
  <div>
    <p>{{product.fiche}}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, Product } from '../store'
import { getProduct } from '../products'

export default defineComponent({
  name: 'ContainerDataSheet',
  data(){
    return {
      store: useStore(),
      product: {} as Product
    }
  },
  methods:{
    Product(){
      getProduct('processeurs', "PB00493654")
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

.dataSheet{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin : 20px;
  align-items: center;
  background: rgba(52, 75, 157, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
}
table{
    width:100%;
}
.tableDataSheet{
    display:flex;
    justify-content: center;
}
th{
    margin : 50px;
    border: solid;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 32px;

}

</style>
