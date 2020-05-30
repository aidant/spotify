import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const getRouter = () => new VueRouter({
  routes: [
    { path: '/', redirect: '/landing' },
    { path: '/landing', component: () => import('./pages/Landing.vue') },
    { path: '/profile', component: () => import('./pages/Profile.vue') },
  ]
})
