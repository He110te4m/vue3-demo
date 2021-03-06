import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { RouteNames as HomeRouteNames } from './modules/home';
const routes = Object.values(import.meta.globEager('./modules/*.ts')).map(exp => exp.routes as RouteRecordRaw[]);

const defaultRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: HomeRouteNames.index
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes: defaultRoutes.concat(...routes),
    scrollBehavior: () => ({
        el: '#app',
        x: 0,
        y: 0
    })
});
