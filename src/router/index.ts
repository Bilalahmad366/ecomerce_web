import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/login.vue'
import SignUp from '@/components/SignUp.vue'
import adminpage from '@/components/adminpage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  
    {
      path: '/adminpage',
      name: 'adminpage',
      component: adminpage
    },
  
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:  Login  //() => import('../components/login.vue')
    },
    {
      path: '/SignUP',
      name: 'SignUp',
      component:SignUp
    }
  ]
})

export default router
