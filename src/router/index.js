import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  { // 首页
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/components/BaseContainer'),
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/components/Index')
      }
    ]
  },
  { // 日记
    path: '/diary',
    name: 'Diary',
    redirect: { name: 'diary-index' },
    component: () => import('@/components/BaseContainer'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/components/Diary') }
    ])('diary-')
  },
  { // 发布
    path: '/publish',
    name: 'Publish',
    redirect: { name: 'publish-index' },
    component: () => import('@/components/BaseContainer'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/components/Publish') }
    ])('publish-')
  },
  { // 社区
    path: '/community',
    name: 'Community',
    redirect: { name: 'community-index' },
    component: () => import('@/components/BaseContainer'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/components/Community') }
    ])('community-')
  },
  { // 我的个人
    path: '/person',
    name: 'Person',
    redirect: { name: 'Person-index' },
    component: () => import('@/components/BaseContainer'),
    children: (pre => [
      { path: 'index', name: `${pre}index`, component: () => import('@/components/Person') }
    ])('Person-')
  }
]

let router = new VueRouter({ routes })
export default router
