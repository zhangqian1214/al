import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../login/index'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // component: Login
      component: () => import(/* webpackChunkName: "about" */ '../login/index.vue')
    },
    {
      path: '/richText',
      name: 'richText',
      component: resolve => require(['../richText/index'], resolve)
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: resolve => require(['../scroll/index'], resolve)
    },
    {
      path: '/aboutPag',
      name: 'aboutPag',
      component: resolve => require(['../aboutPag/index.vue'], resolve),
      children: [
        {
          path: '/child1',
          name: 'child1',
          component: resolve => require(['../child1/index'], resolve),
          meta: { title: '孩子路由1' }
        },
        {
          path: '/child2',
          name: 'child2',
          component: resolve => require(['../child2/index'], resolve),
          meta: { title: '孩子路由2' }
        },
        {
          path: '/child3',
          name: 'child3',
          component: resolve => require(['../child3/index'], resolve),
          meta: { title: '孩子路由3' }
        },
        {
          path: '/richText2',
          name: 'richText2',
          component: resolve => require(['../richText2/index'], resolve),
          meta: { title: '富文本2' }
        },
      ]
    },
    {
      path: '/chart',
      name: 'chart',
      component: resolve => require(['../chart/index'], resolve),
      children: [
        {
          path: '/chart/chart1',
          name: 'chart1',
          component: resolve => require(['../chart/chart1/index'], resolve),
          meta: { title: '图表地球' }
        },
        {
          path: '/chart/chart2',
          name: 'chart2',
          component: resolve => require(['../chart/chart2/index'], resolve),
          meta: { title: '图表' }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})
