export default {
  path: 'configuration',
  name: 'configuration',
  component: () => import('@/views/configuration/index.vue'),
  meta: {
    locale: 'menu.configuration',
    icon: 'icon-dashboard',
    requiresAuth: true,
  },
  children: [],
};
