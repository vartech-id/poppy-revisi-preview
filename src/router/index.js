import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import Last from '../views/Last.vue'
import check_in from '../views/check_in.vue';
import check_in_success from '../views/check_in_success.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/form', name: 'form', component: Form },
  { path: '/last', name: 'last', component: Last },
  { path: '/check-in', name : 'check_in', component : check_in},
  { path: '/check-in-success', name: 'check-in-success', component: check_in_success}  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
