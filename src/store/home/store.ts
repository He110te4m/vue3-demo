/**
 * @author: he110
 * @since: 2021-05-21 20:41:31
 * @description:
 * @Last Modified by: cyh
 * @Last Modified time: 2021-05-21 21:01:13
 */

import { createStore } from 'vuex';
import { homeMutations } from './mutations';
import { homeState } from './state';

export const homeStore = createStore({
    state: homeState,
    mutations: homeMutations
});
