import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import User from './modules/user'
import Role from './modules/role'


const routes: Array<RouteRecordRaw> = [
  {
    path:'/main',
    name:'Main',
    children: [
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
      }
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
