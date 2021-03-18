import Vue from 'vue'
import VueRouter from 'vue-router'
import BookIndex from '@/pages/BookIndex'
import BookSearch from '@/pages/Search'
import BookEdit from '@/pages/BookEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookIndex',
    component: BookIndex
  },
  {
    path: '/search',
    name: 'BookSearch',
    component: BookSearch
  },
  {
    path: '/edit',
    name: 'BookEdit',
    component: BookEdit 
  },
  {
    // 存在しないURL(path)はホームに戻る
    path: '*',
    redirect: '/', 
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
