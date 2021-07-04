import { axios } from 'utils/axios';

const articleUrl = 'articles';

const defaultLimit = 10;

export async function getArticles(page: number, limit = defaultLimit): Promise<ApiReturn> {
    return axios.get(articleUrl, {
        params: {
            page,
            limit
        }
    });
}
