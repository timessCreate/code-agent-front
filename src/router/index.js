import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: () => HomeView,
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ServiceView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: () => import('../views/user/UserLoginView.vue'),
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: import('../views/user/UserRegisterView.vue'),
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: import('../views/manager/UserManageView.vue'),
    },
  ],
})

export default router
