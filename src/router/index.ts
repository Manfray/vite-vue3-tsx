import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由配置 和以前一样
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home'
    },
    component: () => import('@/views/home')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      type: 'login'
    },
    component: () => import('@/views/login')
  },
  {
    path: '/:pathMatch(.*)*', // 注意此处 404页面匹配规则和以前不同，得采用这种配置方式才行
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = createRouter({
  history: createWebHistory(), // history模式
  routes
})

export default router
