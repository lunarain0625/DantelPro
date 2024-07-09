import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;