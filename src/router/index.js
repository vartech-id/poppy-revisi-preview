import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Last from '../views/Last.vue'
import CheckIn from '../views/CheckIn.vue'
import CheckIn_success from '../views/CheckIn_success.vue'
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/form', name: 'form', component: Form },
  { path: '/last', name: 'last', component: Last },
  { path: '/check-in' , name: 'check_in', component: CheckIn},
  { path: '/check-in-success' , name: 'check_in_success', component: CheckIn_success}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
