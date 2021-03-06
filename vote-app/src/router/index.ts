import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import component from '../views/Home.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/theme',
    name: 'Theme',
    component: () => import('../views/Theme.vue')
  },
  {
    path: '/oddoreven',
    name: 'OddOrEven',
    component: () => import('../views/OddOrEven.vue')
  },
  {
    path: '/input',
    name: 'Input',
    component: () => import('../views/Input.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
