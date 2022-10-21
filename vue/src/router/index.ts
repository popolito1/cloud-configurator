import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ConfiguratorPage from '../pages/ConfiguratorPage.vue'
import ConfiguratorChoicePage from '../pages/ConfiguratorChoicePage.vue'
import ContainerProduct from '../pages/ContainerProduct.vue'
import BillPage from '../pages/BillPage.vue'
import NotFound from '../pages/NotFound.vue'
import HomePage from '../pages/HomePage.vue'
import ProductsPage from '../pages/ProductsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "HomePage",
    component: HomePage
  },
  {
    path: '/configurator',
    name: "configurator",
    component: ConfiguratorPage
  },
  {
    path: '/configurator/:category/:type',
    name: "configuratorChoice",
    component: ConfiguratorChoicePage,
  },
  {
    path: '/product/:category/:urlId',
    name: "productPage",
    component: ContainerProduct
  },
  {
    path: '/products',
    name: "productList",
    component: ProductsPage
  },
  {
    path: '/bill',
    name: "BillPage",
    component: BillPage
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  

export default router