import { RouteRecordRaw } from 'vue-router';

export const enum RouteNames {
    index = 'home',
    article = 'article',
    articles = 'articles',
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
                path: 'article_list',
                name: RouteNames.articles,
                component: () => import('home/mod_home/article_list/index.vue')
            },
            {
                path: 'article/:id',
                name: RouteNames.article,
                props: route => ({ id: route.params.id }),
                component: () => import('home/mod_home/article_detail/index.vue')
            }
        ]
    }
];
