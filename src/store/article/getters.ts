/**
 * @author: he110
 * @since: 2021-05-22 20:37:04
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-23 14:27:00
 */

import { ArticleState } from './state';

export const articleGetters = {
    categories: (state: ArticleState) => [...new Set(state.articles.map(articcle => articcle.category))],
    getArticleByID: (state: ArticleState) => (id: string) => state.articles.find(article => article.id === id)
};

export type ArticleGetters = typeof articleGetters;
