import 'normalize.css'
import Vue from 'vue'
import { getRouter } from './router'
import './style.css'
import { parseSpotifyCallback } from './utilities/spotify-authorization'

parseSpotifyCallback()

addEventListener('load', () => {
  new Vue({
    el: document.body,
    router: getRouter(),
    render: h => h('body', [h('router-view')])
  })
})
