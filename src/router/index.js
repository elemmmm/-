import Vue from 'vue'
import VueRouter from 'vue-router'

//测试案例
import Header from '../testing/Header.vue';
import Button from '../testing/Button.vue';
import Field from '../testing/Field.vue';
import Navbar from '../testing/Navbar.vue';
import Cart from '../testing/Cart.vue';
import Me from '../testing/Me.vue';
import Swiper from '../testing/Swiper.vue';
//项目实践
import Home from '../views/Home.vue'
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
// 导入训练详情页
import details from '../views/details'
import echarts from '../components/echarts';
import proupRight from '../components/poupright'
Vue.use(VueRouter)
const routes = [
  {
    path:'/poupright',
    component:proupRight
  },
  {
    path:'/echarts',
    component:echarts
  },
  //训练详情页
  // 训练页路由
  {
    path:"/details",
    component:details
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/swiper',
    component:Swiper
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/navbar',
    component:Navbar
  },
  {
    path:'/header',
    component:Header
  },
  {
    path:'/button' ,
    component:Button
  },
  {
    path:'/field',
    component:Field
  },
  {
    path: '/',
    component: Home
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
