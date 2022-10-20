
<template>
<div class="dataSheet">
    <div><h1> Fiche Technique</h1></div>
    <table class="tableDataSheet">
        <th>
            <td>Caracteristiques a gauche</td>
            <td>Caracteristique au milieu</td>
            <td>Caracteristique a droite</td>
        </th>

    
       
}
    </table>
  <div>
    <p>{{product.fiche}}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore, Product } from '../store'


export default defineComponent({
  name: 'ContainerDataSheet',
  data(){
    return {
      store: useStore(),
      product: {} as Product
    }
  },
  methods:{
    getProduct(){
      this.store.dispatch("getProduct",{category:this.$route.params.category, urlId:this.$route.params.urlId})
      .then(data => this.product = data)
    },
   /* getDataSheet(){
      for(const [featureName, feature] of Object.entries(this.product.fiche)){
    //chaque feature a des labels
      for(const [labelName, label] of Object.entries(feature)){
        //here label can have a list of values or a single string value
        //maybe check the type of label to see
    }
    }*/

  },
  mounted(){
    this.getProduct();
  }
  
});
</script>

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
