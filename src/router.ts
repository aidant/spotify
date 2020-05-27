import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/hello-world' },
    { path: '/hello-world', component: () => import('./pages/HelloWorld.vue') }
  ]
})
