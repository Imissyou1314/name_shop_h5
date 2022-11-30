import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/detail/:fileName',
    name: 'Detail',
    component: () => import('@/views/Detail.vue')
  }
]

export default routes
