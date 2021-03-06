import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir);
}

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            'static': pathResolve('public/static'),
            '@': pathResolve('src'),
            'apis': pathResolve('src/apis'),
            'common': pathResolve('src/common'),
            'components': pathResolve('src/components'),
            'home': pathResolve('src/home'),
            'router': pathResolve('src/router'),
            'store': pathResolve('src/store'),
            'utils': pathResolve('src/utils')
        }
    },
    server: {
        open: '/'
    }
});
