import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/Company')
  },
  {
    path: '/industry',
    name: 'Industry',
    component: () => import('@/views/Industry')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail')
  },
  {
    path: '/answer',
    name: 'Detail',
    component: () => import('@/views/Answer')
  },
  {
    path: '/swiper',
    component: () => import('@/views/swiper')
  }
]

const router = new VueRouter({
  routes
})

export default router
