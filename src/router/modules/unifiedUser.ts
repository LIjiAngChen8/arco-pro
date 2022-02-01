export default {
  path: 'unifiedUser',
  name: 'unifiedUser',
  component: () => import('@/views/unifiedUser/index.vue'),
  meta: {
    locale: 'menu.unifiedUser',
    icon: 'icon-dashboard',
    requiresAuth: true,
  },
  children: [
    {
      path: 'userManage',
      name: 'userManage',
      component: () => import('@/views/unifiedUser/userManage/index.vue'),
      meta: {
        locale: 'menu.unifiedUser.userManage',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
    {
      path: 'orgUser',
      name: 'orgUser',
      component: () => import('@/views/unifiedUser/orgUser/index.vue'),
      meta: {
        locale: 'menu.unifiedUser.orgUser',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
    {
      path: 'roleManage',
      name: 'roleManage',
      component: () => import('@/views/unifiedUser/roleManage/index.vue'),
      meta: {
        locale: 'menu.unifiedUser.roleManage',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
    {
      path: 'leaderManage',
      name: 'leaderManage',
      component: () => import('@/views/unifiedUser/leaderManage/index.vue'),
      meta: {
        locale: 'menu.unifiedUser.leaderManage',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
    {
      path: 'classManage',
      name: 'classManage',
      component: () => import('@/views/unifiedUser/classManage/index.vue'),
      meta: {
        locale: 'menu.unifiedUser.classManage',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
  ],
};
