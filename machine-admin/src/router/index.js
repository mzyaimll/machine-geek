import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/main',
    name:'Main',
    children: [
      {
        path: '/main-layout',
        name: 'main-layout',
        meta: {
          title: '主页',
          icon: '',
        },
        component: () => import ('@/views/main/index.vue')
      },
      {
        path: '/role-manager',
        name: 'role-manager',
        meta: {
          title: '角色管理',
          icon: '',
        },
        component: () => import ('@/views/role/index.vue')
      },
      {
        path: '/user-manager',
        name: 'user-manager',
        meta: {
          title: '用户管理',
          icon: '',
        },
        component: () => import ('@/views/user/index.vue')
      },
      {
        path: '/interface-manager',
        name: 'interface-manager',
        meta: {
          title: '接口管理',
          icon: '',
        },
        component: () => import ('@/views/interface/index.vue')
      },
      
    ],
    component: () => import('@/views/main.vue')
  },
  {
    path: '/',
    name: 'root',
    redirect: '/login'
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('@/views/login/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
