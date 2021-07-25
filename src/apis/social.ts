import { axios } from 'utils/axios';

const socialsUrl = 'socials/list';

export async function getSocials(): Promise<ApiReturn> {
    return axios.get(socialsUrl);
}
