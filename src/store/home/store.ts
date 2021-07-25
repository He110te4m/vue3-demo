/**
 * @author: he110
 * @since: 2021-05-21 20:41:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-23 14:12:56
 */

import { homeActions } from './actions';
import { homeGetters } from './getters';
import { homeMutations } from './mutations';
import { homeState } from './state';

export const homeStore = {
    state: homeState,
    mutations: homeMutations,
    getters: homeGetters,
    actions: homeActions
};
