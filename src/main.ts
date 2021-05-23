import { createApp } from 'vue';
import App from 'home/mod_launch/app.vue';
import router from 'router/index';
import { store } from 'store/index';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'common/style/index.less';

const isDev = import.meta.env.DEV;

const app = createApp(App);

app.config.performance = isDev;

app.use(router)
    .use(store)
    .use(Antd);

app.mount('#app');

if (isDev) {
    (window as SafeAny).appRoot = app;
}
