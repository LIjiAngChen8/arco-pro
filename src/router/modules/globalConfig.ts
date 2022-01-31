export default {
  path: 'globalConfig',
  name: 'globalConfig',
  component: () => import('@/views/globalConfig/index.vue'),
  meta: {
    locale: 'menu.globalConfig',
    icon: 'icon-dashboard',
    requiresAuth: true,
  },
  children: [
    {
      path: 'interfaceScheme',
      name: 'interfaceScheme',
      component: () => import('@/views/globalConfig/interfaceScheme/index.vue'),
      meta: {
        locale: 'menu.globalConfig.interfaceScheme',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
  ],
};
