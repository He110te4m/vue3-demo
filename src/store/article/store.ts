/**
 * @author: he110
 * @since: 2021-05-21 20:41:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-23 14:12:56
 */

import { articleActions } from './actions';
import { articleGetters } from './getters';
import { articleMutations } from './mutations';
import { articleState } from './state';

export const articleStore = {
    state: articleState,
    mutations: articleMutations,
    getters: articleGetters,
    actions: articleActions
};
