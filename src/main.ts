import Vue from 'vue'
import { router } from './router'

const application = document.createElement('main')
document.body.append(application)

new Vue({
  router,
  render: h => h('main', [h('router-view')])
}).$mount(application)
