/**
 * @author: he110
 * @since: 2021-05-21 21:16:31
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-07-25 20:45:42
 */

import type { ArticleInfo } from './interface';
import type { ArticleState } from './state';

import { format } from 'date-fns';
import { ArticleMutationsName } from './mutations_name';

export const articleMutations = {
    [ArticleMutationsName.setArticles](state: ArticleState, list: ArticleInfo[] = []) {
        state.articles = list.reverse().map(article => {
            article.createdAt = format(Number(article.createdAt), 'yyyy-MM-dd');
            return article;
        });
    }
};

export type ArticleMutations = typeof articleMutations;
