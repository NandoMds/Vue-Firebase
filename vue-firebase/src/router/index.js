import Vue from 'vue'
import VueRouter from 'vue-router'

//Components-Layout
import InitialLayout from '../layout/InitialLayout.vue'

//Components-Views
import LandingPage from '../views/LandingPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomePage from '../views/HomePage.vue'
import About from '../views/About.vue'
import Funil from '../views/Funil.vue'
import SwipeCard from '../views/SwipeCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'LandingPage',
    component: InitialLayout,
    children: [
      {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/funil',
        name: 'Funil',
        component: Funil
      },
      {
        path: '/swipe-card',
        name: 'SwipeCard',
        component: SwipeCard
      },
    ]
  },  
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
