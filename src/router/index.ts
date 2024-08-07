import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '@/components/login.vue'
import SignUp from '@/components/SignUp.vue'
import welcome from '@/components/welcome.vue'
import cart from '@/components/cart.vue'
import dashboard from '@/components/dashboard.vue'
import about from '@/components/about.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
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
