
export default {
  path: '/main/user',
  name: 'user',
  redirect: '/main/user/user-manager',
  children: [
    {
      path: '/user-manager',
      name: 'user-manager',
      meta: {
        title: '用户管理',
        icon: '',
      },
      component: () => import ('@/views/user/index.vue')
    }
  ]
}