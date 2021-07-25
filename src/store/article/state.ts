/**
 * @author: he110
 * @since: 2021-05-21 20:40:56
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-06-16 21:23:34
 */

import type { FixState } from 'store/types';
import type { ArticleInfo } from './interface';

export function articleState () {
    return {
        articles: [] as ArticleInfo[]
    };
}

export type ArticleState = FixState<typeof articleState>;
