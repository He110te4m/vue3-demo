import { createLogger, createStore } from 'vuex';
import { articleStore } from './article/store';
import { homeStore } from './home/store';
import { rootStore } from './root/store';
import { GlobalStore } from './types';

const isDev = import.meta.env.DEV;

export const modules = {
    home: homeStore,
    article: articleStore
};

export const store = createStore({
    ...rootStore,
    modules,
    plugins: isDev ? [createLogger()] : []
});

export function useStore() {
    return store as GlobalStore;
}
