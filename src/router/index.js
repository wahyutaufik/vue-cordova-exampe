import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'LatestMovie',
        component: () => import('@/components/LatestMovie')
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        props: true,
        component: () => import('@/components/Movie')
    },
  ]
})