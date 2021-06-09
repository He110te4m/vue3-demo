/**
 * @author: he110
 * @since: 2021-05-21 20:40:56
 * @description:
 * @Last Modified by: cyh
 * @Last Modified time: 2021-05-21 20:58:34
 */

import type { FixState } from 'store/types';

export function homeState () {
    return {
        isExpandSidebar: false
    };
}

export type HomeState = FixState<typeof homeState>;
