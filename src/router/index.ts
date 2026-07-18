import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Stats from '../views/Stats.vue'
import Settings from '../views/Settings.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/stats', component: Stats },
    { path: '/settings', component: Settings },
    { path: '/about', component: About },
  ],
})

export default router
