import Vue from 'vue'
import VueRouter from 'vue-router'
import ClockDoughnut from '../views/ClockDoughnut.vue'
import ClockDial from '../views/ClockDial.vue'
import ClockDigital from '../views/ClockDigital.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'dial'
  }, {
    path: '/doughnut',
    name: 'doughnut',
    component: ClockDoughnut
  }, {
    path: '/dial',
    name: 'dial',
    component: ClockDial
  }, {
    path: '/digital',
    name: 'digital',
    component: ClockDigital
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
