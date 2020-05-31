import 'normalize.css'
import Vue from 'vue'
import { router } from './router'
import './style.css'

const vue = new Vue({
  router,
  render: h => h('body', [h('router-view')])
})

addEventListener('load', () => vue.$mount(document.body))
