export default {
  path: '/role',
  name: 'role',
  redirect: '/main/role/role-manager',
  children: [
    {
      path: '/role-manager',
      name: 'role-manager',
      meta: {
        title: '角色管理',
        icon: '',
      },
      component: () => import ('@/views/role/index.vue')
    }
  ]
}