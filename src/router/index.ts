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
        component: () => import('@/pages/index.vue'),
        children: [
            {
                path: 'addCase',
                component: () => import('@/pages/add.vue')
            },
            {
                path: 'info/:userid',
                component: () => import('@/pages/info.vue')
            },
            {
                path: 'model',
                component: () => import('@/pages/model.vue')
            },
            {
                path: ':status',
                component: () => import('@/pages/table.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login',
            // keepAlive: true,
            // requireAuth: true
        },
        component: () => import('@/pages/login.vue')
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
