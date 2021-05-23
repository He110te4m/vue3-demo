/**
 * @author: he110
 * @since: 2021-05-21 21:16:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-23 14:42:01
 */

import type { HomeState } from './state';

import { HomeMutationsName } from './mutations_name';

export const homeMutations = {
    [HomeMutationsName.switchSidebarExpandStatus](state: HomeState, status: boolean | 'auto' = 'auto') {
        state.isExpandSidebar = status === 'auto' ? !state.isExpandSidebar : status;
    }
};

export type HomeMutations = typeof homeMutations;
