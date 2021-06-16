import { axios } from 'utils/axios';

const siteInfoUrl = 'site/info';

export async function getSiteInfo(): Promise<ApiReturn> {
    return axios.get(siteInfoUrl);
}
