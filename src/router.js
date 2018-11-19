import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: function () {
        return import(/* webpackChunkName: "home" */ './views/home/home-page.vue')
      }
    }
  ]
})

// {
//   path: '/',
//   name: 'home',
//   component: function () {
//     return import(/* webpackChunkName: "home" */ './views/Home.vue')
//   }
// },
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: function () {
//     return import(/* webpackChunkName: "about" */ './views/About.vue')
//   }
// }