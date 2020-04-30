import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Survey from '@/views/Survey.vue'
import Secret from '@/views/Secret.vue'
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

  }, {

    path: '/secret',
    name: 'secret',
    component: Secret

  }

]

const router = new VueRouter({
  routes
})

export default router
