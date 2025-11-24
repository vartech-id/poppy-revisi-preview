import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Last from '../views/Last.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/form', name: 'form', component: Form },
  { path: '/last', name: 'last', component: Last },
  // keep legacy path working
  { path: '/frontend/last', redirect: { name: 'last' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
