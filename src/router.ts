import Vue from 'vue'
import VueRouter from 'vue-router'
import { isAuthenticated } from './store'
import { getSpotifyAuthenticationUrl } from './utilities/spotify-authorization'

Vue.use(VueRouter)

export const getRouter = () => {
  const router = new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/landing',
      },
      {
        path: '/login',
        beforeEnter: (to, from, next) => {
          location.replace(getSpotifyAuthenticationUrl(to.query.redirect as string))
        },
      },
      {
        path: '/landing',
        component: () => import('./pages/Landing.vue'),
      },
      {
        path: '/profile',
        component: () => import('./pages/Profile.vue'),
        meta: {
          authentication: true,
        },
      },
    ]
  })

  router.beforeEach((to, from, next) => {
    if (to.meta.authentication && !isAuthenticated()) {
      next({ path: '/login', query: { redirect: to.path } })
    } else {
      next()
    }
  })

  return router
}
