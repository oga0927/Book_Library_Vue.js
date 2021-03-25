import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/Home'
import BookIndex from '@/pages/BookIndex'
import BookSearch from '@/pages/BookSearch'
import BookEdit from '@/pages/BookEdit'
import LogIn from '@/pages/LogIn'
import LogOut from '@/pages/LogOut'
import Register from '@/pages/Register'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    // 存在しないURL(path)はホームに戻る
    path: '*',
    redirect: '/login', 
  },
  // {
  //   path: '/login',
  //   redirect: '/login',
  // },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: LogOut
  },
  {
    path: '/',
    name: 'BookIndex',
    component: BookIndex,
    meta: {
      requiresAuth: true
    }
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
    path: '/register',
    name: 'Register',
    component: Register
  }
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
