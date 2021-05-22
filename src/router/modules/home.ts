import { RouteRecordRaw } from 'vue-router';

export const enum RouteNames {
    index = 'home'
}

export const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: RouteNames.index,
        component: () => import('home/mod_home/index.vue')
    }
];
