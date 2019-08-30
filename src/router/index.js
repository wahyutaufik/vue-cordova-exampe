import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: () => import('@/components/Home') },
    { path: '/movie/:id', name: 'Movie', props: true, component: () => import('@/components/Movie') },
  ]
})