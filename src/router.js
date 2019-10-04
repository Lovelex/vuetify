import Vue from 'vue'
import Router from 'vue-router'

// Components
import Text from './basic/Text.vue'
import Buttons from './basic/Buttons.vue'
import Breakpoints from './basic/Breakpoints.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/text',
      name: 'Text',
      component: Text
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/breakpoints',
      name: 'Breakpoints',
      component: Breakpoints
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  
  ]
})
