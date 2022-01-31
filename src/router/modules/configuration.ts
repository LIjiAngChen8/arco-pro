export default {
  path: 'configuration',
  name: 'configuration',
  component: () => import('@/views/configuration/index.vue'),
  meta: {
    locale: 'menu.configuration',
    icon: 'icon-dashboard',
    requiresAuth: true,
  },
  children: [
    {
      path: 'business',
      name: 'business',
      component: () => import('@/views/configuration/business/index.vue'),
      meta: {
        locale: 'menu.configuration.business',
        icon: 'icon-dashboard',
        requiresAuth: true,
      },
    },
  ],
};
