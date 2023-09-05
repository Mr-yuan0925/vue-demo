import Vue from 'vue'
import VueRouter from 'vue-router'
import { UserLayout } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/user/login',
    component: UserLayout,
  },
  {
    path: '/user/login',
    // redirect: '/user/login',
    component: UserLayout,
    children:[
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "home" */ '../views/user/Login.vue'),
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue'),
  },

  // {
  //   path: '/',
  //   redirect: '/user/login',
  //   component: UserLayout,
  //   children:[
  //     {
  //       path: '/login',
  //       name: 'login',
  //       component: () => import(/* webpackChunkName: "home" */ '../views/user/Login.vue'),
  //     }
  //   ]
  // },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
