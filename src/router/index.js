import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: () => import('@/components/Home') },
    { path: '/list/:id', name: 'List', props: true, component: () => import('@/components/List') },
  ]
})