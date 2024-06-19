import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DancersView from '@/views/DancersView.vue'; // Adjust the path as necessary


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      redirect: '/'  // Redirect /home to root path if needed
    },
    {
      path: '/more',
      name: 'more',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MoreView.vue')
    },
    {
      path: '/dancers',
      name: 'dancers',
      component: () => import('../views/DancersView.vue')
    },
  ]
})

export default router
