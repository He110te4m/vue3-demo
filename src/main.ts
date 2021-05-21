import { createApp } from 'vue'
import App from '@/home/mod_launch/app.vue'
import router from 'router/index';
import { store } from 'store/index';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'common/style/index.less';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');
