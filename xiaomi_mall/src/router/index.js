import Vue from 'vue'
import VueRouter from 'vue-router'
import { getLogin } from '../until/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: { name: 'home' },
    component: () => import(/* webpackChunkName: "about" */ '../layout/Home.vue')
  },
  {
    path: '/reg',
    meta: { name: 'reg' },
    component: () => import(/* webpackChunkName: "about" */ '../layout/Reg.vue')
  },
  {
    path: '/car',
    redirect: 'cars',
    meta: { name: 'reg' },
    component: () => import(/* webpackChunkName: "about" */ '../layout/Car.vue'),
    children: [
      {
        path: '/cars',
        meta: { name: 'cars' },
        component: () => import(/* webpackChunkName: "about" */ '../views/Cars.vue')
      },
      {
        path: '/car404',
        meta: { name: 'car404' },
        component: () => import(/* webpackChunkName: "about" */ '../views/Car404.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async function(to, from, next) {
  const data = await getLogin()
  if (data.status === 10) {
    if (to.path === '/cars') {
      return next('/car404')
    }
  }
  next()
})

export default router
