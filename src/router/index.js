import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Last from '../views/Last.vue'
import checkIn from '../views/check-in.vue'
import CheckIn from '../views/check-in.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/form', name: 'form', component: Form },
  { path: '/last', name: 'last', component: Last },
  { path: '/check-in', name: 'check', component: CheckIn}  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
