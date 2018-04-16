import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: "hello-word" */ '@/components/HelloWorld')
    },
    {
      path: '',
      name: '',
      component: () => import(/* webpackChunkName: "hello-word" */ '@/components/HelloWorld')
    }]
})
