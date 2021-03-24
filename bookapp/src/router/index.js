import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/Home'
import BookIndex from '@/pages/BookIndex'
import BookSearch from '@/pages/BookSearch'
import BookEdit from '@/pages/BookEdit'
import LogIn from '@/pages/LogIn'
import Register from '@/pages/Register'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  // },
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
    path: '/edit/:id',
    name: 'BookEdit',
    component: BookEdit 
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
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
