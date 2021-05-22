/**
 * @author: he110
 * @since: 2021-05-21 20:41:34
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-21 20:41:34
 */

import { createStore } from 'vuex';
import { rootState } from './state';

export const rootStore = createStore({
    state: rootState
});
