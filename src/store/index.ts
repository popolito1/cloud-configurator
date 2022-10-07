// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  filter: String,
  basket: Array<Object>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    filter:"all",
    basket: []
  },
  getters: {
    getProducts(state){
      //filtering
    },
    getBasket(state){
      return state.basket;
    }
  }
})