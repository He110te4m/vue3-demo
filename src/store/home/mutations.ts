/**
 * @author: he110
 * @since: 2021-05-21 21:16:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-21 21:16:31
 */

import { MutationTree } from 'vuex';
import { HomeMutationsName } from './mutations_name';
import { homeState } from './state';

export const homeMutations: MutationTree<ReturnType<typeof homeState>> = {
    [HomeMutationsName.updateSidebarExpandStatus] (state, status: boolean) {
        state.isExpandSidebar = status;
    }
};
