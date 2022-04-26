import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VideosView from '../views/VideosView'
import SobreView from '../views/SobreView'
import ContatosView from '../views/ContatosView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/videos',
    component: VideosView
  },

  {
    path: '/sobre',
    component: SobreView
  },

  {
    path: '/contato',
    component: ContatosView
  },

  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
