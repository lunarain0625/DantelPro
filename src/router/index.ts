import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: 'Main',
            // keepAlive: true,
            // requireAuth: true
        },
        component: () => import('@/pages/index.vue')
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About',
            // keepAlive: true,
            // requireAuth: true
        },
        component: () => import('@/pages/about.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        meta: {
            title: '404',
            // keepAlive: true,
            // requireAuth: true
        },
        component: () => import('@/pages/404.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;