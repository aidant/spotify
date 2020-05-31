import Vue from 'vue'
import VueRouter from 'vue-router'
import { isAuthenticated, setAuthorization } from './store'
import { getSpotifyAccessToken } from './utilities/spotify-authorization'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/landing',
    },
    {
      path: '/login',
      beforeEnter: (to, from, next) => {
        getSpotifyAccessToken()
          .then(setAuthorization)
          .then(() => next(to.query.redirect as string || '/'))
          .catch(() => next('/'))
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
