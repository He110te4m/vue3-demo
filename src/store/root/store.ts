/**
 * @author: he110
 * @since: 2021-05-21 20:41:34
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-21 20:41:34
 */

import type { Store } from 'vuex';
import type { FixCommit, FixDispatch, FixGetter } from '../types';

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

export type RootStore = Omit<Store<RootState>, 'commit' | 'getters' | 'dispatch'> & {
    getters: FixGetter<RootGetters>;
    dispatch: FixDispatch<RootActions>;
    commit: FixCommit<RootMutations>;
};
