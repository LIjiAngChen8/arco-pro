export default {
  path: 'business',
  name: 'business',
  component: () => import('@/views/business/index.vue'),
  meta: {
    locale: 'menu.business',
    icon: 'icon-dashboard',
    requiresAuth: true,
  },
  children: [
    {
      path: 'moduleManager',
      name: 'moduleManager',
      component: () => import('@/views/business/moduleManager/index.vue'),
      meta: {
        locale: 'menu.business.moduleManager',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
    {
      path: 'businessManager',
      name: 'businessManager',
      component: () => import('@/views/business/businessManager/index.vue'),
      meta: {
        locale: 'menu.business.businessManager',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
    {
      path: 'systemManager',
      name: 'systemManager',
      component: () => import('@/views/business/systemManager/index.vue'),
      meta: {
        locale: 'menu.business.systemManager',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
  ],
};
