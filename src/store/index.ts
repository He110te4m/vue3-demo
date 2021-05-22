import { createLogger, createStore } from 'vuex';
import { rootStore } from './root/store';

const isDev = import.meta.env.DEV;

export const store =  createStore({
    ...rootStore,
    plugins: isDev ? [createLogger()] : []
});
