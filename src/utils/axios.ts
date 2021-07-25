import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const AXIOS_CONFIG: AxiosRequestConfig = {
    baseURL: '/blog/'
};

const service = axios.create(AXIOS_CONFIG);

function onRequest(config: AxiosRequestConfig): AxiosRequestConfig {
    config.url = config.url && !config.url.includes('.') ? `${config.url}.json` : config.url;

    return config;
}

function onResponseSuccess(config: AxiosResponse): AxiosResponse<ApiReturn> {
    return config.data;
}

function onResponseFail(config: AxiosResponse): AxiosResponse<ApiReturn> {
    return config;
}

service.interceptors.request.use(onRequest);

service.interceptors.response.use(onResponseSuccess, onResponseFail);

export { service as axios };
