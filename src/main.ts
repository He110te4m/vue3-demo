import { App, createApp } from 'vue';
import Blog from 'home/mod_launch/app.vue';
import router from 'router/index';
import { store } from 'store/index';
import { ArticleActionsName } from 'store/article/actions_name';
import { registerDirectives } from './directives';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'common/style/index.less';

const isDev = import.meta.env.DEV;

function initApp() {
    const app = createApp(Blog);

    app.use(router).use(store).use(Antd);

    registerDirectives(app);

    app.mount('#app');

    if (isDev) {
        (window as AnyObj).appRoot = app;
    }

    return app;
}

function initEnv(app: App<Element>) {
    app.config.performance = isDev;
    store.dispatch(ArticleActionsName.initArticle);
}

function init() {
    const app = initApp();
    initEnv(app);
}

init();
