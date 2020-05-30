import Vue from 'vue'
import Header from './components/Header.vue'
import { getRouter } from './router'
import { parseSpotifyCallback } from './utilities/spotify-authorization'

parseSpotifyCallback('/profile')

addEventListener('load', () => {
  new Vue({
    el: document.body,
    router: getRouter(),
    render: h => h('body', [h(Header), h('router-view')])
  })
})
