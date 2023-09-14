import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
  // {
  //   path: '/case',
  //   name: 'Case',
  //   component: () => import('../views/CaseList.vue')
  // },
  {
    path: '/app',
    name: 'App',
    component: () => import('../views/App.vue')
  },
  {
    path: '/mp',
    name: 'MP',
    component: () => import('../views/MP.vue')
  },
  {
    path: '/3d',
    name: '3d',
    component: () => import('../views/3d.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    props: (route) => {
      const props = { ...route.params }
      props.id = +props.id
      return props
    },
    component: () => import('../views/Post.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
