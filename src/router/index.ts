import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'sobre',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/classificacao/risco',
      name: 'risco',
      component: () => import('../views/ClassicacaoRiscoView.vue')
    }
  ]
})

export default router
