import Vue from 'vue'
import { router } from './router'

const application = document.createElement('main')
document.body.append(application)

new Vue({
  router,
  // For some reason the children need to be an array of VNodes..?
  render: h => <main>{[<router-view />]}</main>
}).$mount(application)
