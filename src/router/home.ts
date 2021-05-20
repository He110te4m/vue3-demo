import { RouteRecordRaw } from "vue-router";

export const enum HomeRouteNames {
    index = 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: HomeRouteNames.index,
        component: () => import('home/mod_home/index.vue')
    }
];
