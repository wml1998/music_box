import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from "../views/Login/"
// import Home from "../views/Home/"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component:()=> import("@/views/Home/index.vue")
  // },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("@/views/Login/index.vue")
  },
  {
    path:"/Home",
    name:"Home",
    component:() =>import("@/views/Home/index.vue"),
    children:[
      {
        path:'/Home/FindMusic',
        name:'findMusic',
        redirect:"/Home/FindMusic/recommend",
        component:()=>import('@/views/FindMusic/index.vue'),
        children:[
          {
            path:'/Home/FindMusic/recommend',
            name:"discover",
            component:()=>import('@/views/FindMusic/recommend/index.vue')
          },
          {
            path:'/Home/FindMusic/rankList',
            name:"dislist",
            component:()=>import('@/views/FindMusic/rankList/index.vue')
          },
          {
            path:'/Home/FindMusic/songMenu',
            name:"songmenu",
            component:()=>import('@/views/FindMusic/songMenu/index.vue')
          }
        ]
      },
      {
        path:'/Home/myMusic',
        name:'myMusic',
        component:()=>import('@/views/myMusic/index.vue')
      },
      {
        path:'/Home/Friend',
        name:"Frieds",
        component:()=>import('@/views/Frieds/index.vue')
      },
      {
        path:'/Home/Download',
        name:'Download',
        component:()=>import('@/views/Download/index.vue')
      },
      {
        path:'/Home/Mall',
        name:"Mall",
        component:()=>import("@/views/mall/index.vue")
      }
    ]
  }
  ,
  {
    path:'*',
    redirect:'/Home/FindMusic/recommend'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
