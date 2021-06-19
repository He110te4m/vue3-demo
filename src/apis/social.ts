import { axios } from 'utils/axios';

const socialsUrl = 'socials';

export async function getSocials(): Promise<ApiReturn> {
    return axios.get(socialsUrl);
}
