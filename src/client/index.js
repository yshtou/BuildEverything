import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import Hello from './components/Hello'
import about from './components/about'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

Vue.config.debug = true

Vue.use(Router)
Vue.use(ElementUI)
Vue.use(Vuex)



const router = new Router({
  mode: 'history',
  routes: [
    { name: 'hello', path: '/hello', component: Hello },
    { name: 'about', path: '/about', component: about }
  ]
})

new Vue({
  el: '#app',
  router,
  render (createElement) {
    return createElement(App)
  }
})
