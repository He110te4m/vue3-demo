import { axios } from 'utils/axios';

const linksUrl = 'links/list';

export async function getLinks(): Promise<ApiReturn> {
    return axios.get(linksUrl);
}
