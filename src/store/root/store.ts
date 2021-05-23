/**
 * @author: he110
 * @since: 2021-05-21 20:41:34
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-21 20:41:34
 */

import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { RootActions, rootActions } from './actions';
import { RootGetters, rootGetters } from './getters';
import { RootMutations, rootMutations } from './mutations';
import { RootState, rootState } from './state';

export const rootStore = {
    state: rootState,
    mutations: rootMutations,
    getters: rootGetters,
    actions: rootActions
};

export type RootStore = Omit<Store<RootState>, 'commit' | 'getters'> & {
    getters: {
        [K in keyof RootGetters]: ReturnType<RootGetters[K]>;
    };
    dispatch<K extends keyof RootActions>(key: K, payload: Parameters<RootActions[K]>[1], options?: DispatchOptions): ReturnType<RootActions[K]>;
    commit<K extends keyof RootMutations, P extends Parameters<RootMutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<RootMutations[K]>;
};
