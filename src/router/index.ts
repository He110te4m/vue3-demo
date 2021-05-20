import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { homeRoutes } from "./home";

export default createRouter({
    history: createWebHistory(),
    routes: ([] as RouteRecordRaw[]).concat(homeRoutes)
});
