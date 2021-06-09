/**
 * @author: he110
 * @since: 2021-05-21 20:41:38
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-21 20:41:38
 */

import type { FixState } from 'store/types';

export function rootState () {
    return {};
}

export type RootState = FixState<typeof rootState>;
