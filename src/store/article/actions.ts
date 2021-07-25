/**
 * @author: he110
 * @since: 2021-05-22 20:40:11
 * @description:
 * @Last Modified by: he110
 * @Last Modified time: 2021-05-22 20:40:11
 */

import type { ActionContext } from 'vuex';
import type { RootState } from 'store/root/state';
import type { ArticleState } from './state';

// import { useStore } from 'store/index';
import { getArticles } from 'apis/article';
import { ArticleActionsName } from './actions_name';
import { ArticleMutationsName } from './mutations_name';

type Context = ActionContext<ArticleState, RootState>;

export const articleActions = {
    async [ArticleActionsName.initArticle]({ state, commit }: Context) {
        if (state.articles.length) {
            return;
        }

        const { data = [] } = await getArticles();
        commit(ArticleMutationsName.setArticles, data);
    }
};

export type ArticleActions = typeof articleActions;
