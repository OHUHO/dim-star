import { createRouter, createWebHashHistory } from 'vue-router'
import DiscoverView from "@/views/DiscoverView";
import TendingView from "@/views/TendingView";


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/discover',
    children:[
      {
        path: 'discover',
        name: 'discover',
        component: DiscoverView,
      },

      {
        path: 'tending',
        name: 'tending',
        component: TendingView
      },

    ]
  },





]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
