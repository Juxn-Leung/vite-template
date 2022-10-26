import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView/AboutView.vue'),
      meta: {
        title: '关于'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) { // 判断是否有标题
    document.title = to.meta.title as string
  }
  next()
})

export default router
