/**
 * @author: he110
 * @since: 2021-05-21 20:41:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-23 14:12:56
 */

import type { Store } from 'vuex';
import type { FixCommit, FixDispatch, FixGetter } from '../types';

import { homeActions, HomeActions } from './actions';
import { homeGetters, HomeGetters } from './getters';
import { HomeMutations, homeMutations } from './mutations';
import { HomeState, homeState } from './state';

export const homeStore = {
    state: homeState,
    mutations: homeMutations,
    getters: homeGetters,
    actions: homeActions
};
