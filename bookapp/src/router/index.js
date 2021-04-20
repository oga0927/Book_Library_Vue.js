import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/pages/Home'
import Home from '@/pages/Home'
import BookIndex from '@/pages/BookIndex'
import BookSearch from '@/pages/BookSearch'
import BookEdit from '@/pages/BookEdit'
import LogIn from '@/pages/LogIn'
import Register from '@/pages/Register'
import Profile from '@/pages/Profile'

Vue.use(VueRouter)

const routes = [
  {
    // 存在しないURL(path)はホームに戻る
    path: '*',
    redirect: '/login', 
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
];



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
