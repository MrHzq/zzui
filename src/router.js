import Vue from 'vue'
import Router from 'vue-router'
import hzqRouter from './hzq-router2'

Vue.use(Router)
const routes = hzqRouter({
    // redirect: '/login',
    rc: require.context('@/views', true, /\.vue$/)
})
console.log(routes)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    // component: () =>
    //     import(/* webpackChunkName: "about" */ './views/index.vue'),
    routes
    // [
    //     {
    //         path: '/index', // '/'
    //         children: [
    //             {
    //                 path: 'index', // ''
    //                 name: 'index-index',
    //                 component: () => {}
    //             },
    //             {
    //                 path: 'about',
    //                 name: 'index-about',
    //                 component: () => {}
    //             },
    //             {
    //                 path: 'case',
    //                 component: () => {},
    //                 children: [
    //                     {
    //                         path: 'index', // ''
    //                         name: 'index-case-index',
    //                         component: () => {},
    //                         children: [
    //                             {
    //                                 path: ':id?',
    //                                 name: 'index-case-index-id',
    //                                 component: () => {}
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         path: 'detail/:id?',
    //                         name: 'index-case-detail-id',
    //                         component: () => {}
    //                     }
    //                 ]
    //             },
    //             {
    //                 path: 'help',
    //                 component: () => {},
    //                 children: [
    //                     {
    //                         path: 'index', // ''
    //                         name: 'index-help-index',
    //                         component: () => {},
    //                         children: [
    //                             {
    //                                 path: 'tag:/tid?',
    //                                 name: 'index-help-index-tag-tid',
    // tag/_tid
    //                                 component: () => {}
    //                             },
    //                             {
    //                                 path: ':id',
    // _id
    //                                 name: 'index-help-index-id',
    //                                 component: () => {}
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         path: 'detail/:id?',
    //                         name: 'index-help-detail-id',
    //                         component: () => {}
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ]
})
