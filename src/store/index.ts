import { createLogger, createStore } from 'vuex';
import { HomeStore, homeStore } from './home/store';
import { RootStore, rootStore } from './root/store';

const isDev = import.meta.env.DEV;

const modules = {
    home: homeStore
};

export const store = createStore({
    ...rootStore,
    modules,
    plugins: isDev ? [createLogger()] : []
});

export type GlobalStore = Omit<RootStore, 'getters' | 'commit' | 'dispatch'> & {
    home: HomeStore;
    getters: RootStore['getters'] & HomeStore['getters'];
    commit: RootStore['commit'] & HomeStore['commit'];
    dispatch: RootStore['dispatch'] & HomeStore['dispatch'];
};

export function useStore() {
    return store as GlobalStore;
}
