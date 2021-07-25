import { axios } from 'utils/axios';

const articleListUrl = 'articles/list';

export async function getArticles(): Promise<ApiReturn> {
    return axios.get(articleListUrl);
}

export async function getArticleByID(id: string): Promise<ApiReturn> {
    return axios.get(`${articleListUrl}/${id}.md`);
}
