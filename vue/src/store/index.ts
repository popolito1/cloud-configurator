import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  filter: String,
  basket: Array<Product>
}

export interface Product {
  name: string,
  image: string,
  price: number,
  currency: string,
  extendedName: string,
  urlId: string,
  url: string,
  description: string,
  category: string
  fiche: Object
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    filter:"all",
    basket: []
  },
  getters: {
    getBasket(state){
      return state.basket;
    }
  },
  actions: {
    async getProducts({commit, state}, params:{category: string}) {
      const res: Response = await fetch("http://localhost:8081/API/products",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"category": params.category})        
      })
      const products: Array<Product> = await res.json();
      return products
    },
    async getProduct({commit, state}, params:{category: string, urlId: string}){
      const res: Response = await fetch("http://localhost:8081/API/product",{
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "category": params.category,
          "urlId": params.urlId
        })        
      })
      const product: Product = await res.json();
      return product;
    }
  },
  mutations:{
      addProduct(state, product){
        state.basket.push(product);
      },
      deleteProduct(state, product){
        state.basket=state.basket.filter((el: Product) => el.urlId != product.urlId);
        console.log(state.basket)
      },
      deleteAllProduct (state){
        state.basket=[];
      }
  }
})

export function useStore () {
  return baseUseStore(key)
}