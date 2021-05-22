/**
 * @author: he110
 * @since: 2021-05-21 20:41:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-22 20:41:16
 */

import { CommitOptions, createStore, DispatchOptions, Store } from 'vuex';
import { HomeActions } from './actions';
import { HomeGetters } from './getters';
import { HomeMutations, homeMutations } from './mutations';
import { HomeState, homeState } from './state';

export const homeStore = createStore({
    state: homeState,
    mutations: homeMutations
});

export type HomeStore = Omit<Store<HomeState>, 'commit' | 'getters'> & {
    getters: {
        [K in keyof HomeGetters]: ReturnType<HomeGetters[K]>;
    };
    dispatch<K extends keyof HomeActions>(key: K, payload: Parameters<HomeActions[K]>[1], options?: DispatchOptions): ReturnType<HomeActions[K]>;
    commit<K extends keyof HomeMutations, P extends Parameters<HomeMutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<HomeMutations[K]>;
};

export function useHomeStore() {
    return homeStore as HomeStore;
}
