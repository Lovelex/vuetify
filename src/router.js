import Vue from 'vue'
import Router from 'vue-router'

// Basic
import Text from './basic/Text.vue'
import Buttons from './basic/Buttons.vue'
import Breakpoints from './basic/Breakpoints.vue'

// Views
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Team from './views/Team.vue'

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
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    }

  
  ]
})
