import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "HomePage",
    component: HomePage
  },
  {
    path: '/configurator',
    name: "configurator",
    component: configPage
  },
  {
    path: '/product/:productId',
    name: "productPage",
    component: ContainerProduct
  },
  {
    path: '/products',
    name: "productList",
    component: PageProducts
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