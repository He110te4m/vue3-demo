import { RouteRecordRaw } from 'vue-router';

export const enum RouteNames {
    index = 'home',
    articles = 'articles'
}

export const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        name: RouteNames.index,
        redirect: {
            name: RouteNames.articles
        },
        component: () => import('home/mod_home/index.vue'),
        children: [
            {
                path: 'articles',
                name: RouteNames.articles,
                component: () => import('home/mod_home/article_list/index.vue')
            }
        ]
    }
];
