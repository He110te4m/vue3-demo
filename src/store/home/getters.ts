/**
 * @author: he110
 * @since: 2021-05-22 20:37:04
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-22 20:45:38
 */

import { HomeState } from './state';

export const homeGetters = {
    sidebarWidth (state: HomeState) {
        return state.isExpandSidebar ? 200 : 0;
    }
};

export type HomeGetters = typeof homeGetters;
