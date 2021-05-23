/**
 * @author: he110
 * @since: 2021-05-22 20:37:04
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-23 14:27:00
 */

import { HomeState } from './state';

export const homeGetters = {
    sidebarWidth: (state: HomeState) => (state.isExpandSidebar ? 320 : 0)
};

export type HomeGetters = typeof homeGetters;
