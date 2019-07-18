import Vue from 'vue'
import Router from 'vue-router'
import autoRouter from 'vue-router-auto'

Vue.use(Router)
const routes = autoRouter({
    // redirect: '/about',
    rc: require.context('@/views', true, /\.vue$/)
})

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
    // :[
    //     {
    //         path: '/',
    //         component: () => import('./views/index.vue'),
    //         children: [
    //             {
    //                 path: '',
    //                 name: 'index-index',
    //                 component: () => import('./views/index/index.vue')
    //             },
    //             {
    //                 path: 'about',
    //                 name: 'index-about',
    //                 component: () => import('./views/index/about.vue')
    //             },
    //             {
    //                 path: 'case',
    //                 component: () => import('./views/index/case.vue'),
    //                 children: [
    //                     {
    //                         path: '',
    //                         name: 'index-case-index',
    //                         component: () =>
    //                             import('./views/index/case/index.vue'),
    //                         children: [
    //                             {
    //                                 path: ':id',
    //                                 name: 'index-case-index-id',
    //                                 component: () =>
    //                                     import(
    //                                         './views/index/case/index/_id.vue'
    //                                     )
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         path: 'detail/:id',
    //                         name: 'index-case-detail-id',
    //                         component: () =>
    //                             import('./views/index/case/detail/_id.vue')
    //                     }
    //                 ]
    //             },
    //             {
    //                 path: 'help',
    //                 component: () => import('./views/index/help.vue'),
    //                 children: [
    //                     {
    //                         path: '',
    //                         name: 'index-help-index',
    //                         component: () =>
    //                             import('./views/index/help/index.vue'),
    //                         children: [
    //                             {
    //                                 path: ':id',
    //                                 name: 'index-help-index-id',
    //                                 component: () =>
    //                                     import(
    //                                         './views/index/help/index/_id.vue'
    //                                     )
    //                             },
    //                             {
    //                                 path: 'tag/:tid',
    //                                 name: 'index-help-index-tag-tid',
    //                                 component: () =>
    //                                     import(
    //                                         './views/index/help/index/tag/_tid.vue'
    //                                     )
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         path: 'detail/:id',
    //                         name: 'index-help-detail-id',
    //                         component: () =>
    //                             import('./views/index/help/detail/_id.vue')
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ]
})
