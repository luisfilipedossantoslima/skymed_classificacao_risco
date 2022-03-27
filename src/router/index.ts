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
      path: '/classificacao/risco/1',
      name: 'risco1',
      component: () => import('../views/ClassicacaoRiscoVermelhoView.vue')
    },
    {
      path: '/classificacao/risco/2',
      name: 'risco2',
      component: () => import('../views/ClassicacaoRiscoLaranjaView.vue')
    },
    {
      path: '/classificacao/risco/3',
      name: 'risco3',
      component: () => import('../views/ClassicacaoRiscoAmareloView.vue')
    },
    {
      path: '/classificacao/risco/4',
      name: 'risco4',
      component: () => import('../views/ClassicacaoRiscoVerdeView.vue')
    },
    {
      path: '/classificacao/risco/5',
      name: 'risco5',
      component: () => import('../views/ClassicacaoRiscoAzulView.vue')
    }
  ]
})

export default router
