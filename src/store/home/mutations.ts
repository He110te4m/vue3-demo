/**
 * @author: he110
 * @since: 2021-05-21 21:16:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-21 21:16:31
 */

import type { HomeState } from './state';

import { HomeMutationsName } from './mutations_name';

export const homeMutations = {
    [HomeMutationsName.updateSidebarExpandStatus](state: HomeState, status: boolean) {
        state.isExpandSidebar = status;
    }
};

export type HomeMutations = typeof homeMutations;
