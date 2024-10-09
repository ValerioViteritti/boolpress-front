import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Blog from '../pages/Blog.vue'
import Contacts from '../pages/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/i-miei-post',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    }

  ]
})

export default router
