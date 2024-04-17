import path from "node:path/win32";
import {createRouter, createWebHashHistory, createWebHistory, Router} from "vue-router";


// Lazy Load Make Links faster
const Home = () => import('../Views/Home.vue')
const Login = () => import('../Views/Login.vue')

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Home,
  },
    {
      path: '/login',
      component: Login,
    }
  ]
})
