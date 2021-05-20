import { RouteRecordRaw } from "vue-router";

export const enum HomeRouteNames {
    index = 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: '__app',
        redirect: HomeRouteNames.index,
        component: () => import('@/app.vue'),
        children: [
            {
                path: '/home',
                name: HomeRouteNames.index,
                component: () => import('home/mod_home/index.vue')
            }
        ]
    }
];
