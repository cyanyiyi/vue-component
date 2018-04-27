import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '',
      component: () => import(/* webpackChunkName: "home" */ '@/views/pages/layout/Layout'),
      children: [{
        name: 'home',
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/pages/home')
      }]
    }]
})
