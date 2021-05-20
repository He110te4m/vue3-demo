import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HomeRouteNames, homeRoutes } from './home';

const defaultRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: HomeRouteNames.index
    }
];

export default createRouter({
    history: createWebHistory(),
    routes: defaultRoutes.concat(homeRoutes)
});
