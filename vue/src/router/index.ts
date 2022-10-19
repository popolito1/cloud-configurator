import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductsPage from '../components/ProductsPage.vue'
import HomePage from '../components/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "HomePage",
    component: HomePage
  },
  {
    path: '/products',
    name: "ProductsPage",
    component: ProductsPage
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  

export default router