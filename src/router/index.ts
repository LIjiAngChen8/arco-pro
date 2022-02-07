import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // 进度条progress bar
import 'nprogress/nprogress.css';

import Login from './modules/login';
import PageLayout from '@/layout/page-layout.vue';
import appRoutes from './modules';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/exception/404/index.vue'),
    },
    Login,
    {
      name: 'root',
      path: '/',
      component: PageLayout,
      children: appRoutes,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  if (!_to.name) {
    router.push('/404');
  }
  await next();
  NProgress.done();
});

export default router;
