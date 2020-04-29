import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Survey from '@/views/Survey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {

    path: '/survey',
    name: 'survey',
    component: Survey

  }

  // TODO: Add the Secret route definition
]

const router = new VueRouter({
  routes
})

export default router
