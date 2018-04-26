import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/page/layout/Layout'),
      children: [{
        name: 'home',
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/page/home')
      }]
    }]
})
