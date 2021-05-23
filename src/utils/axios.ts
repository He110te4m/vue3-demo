import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const isDev = import.meta.env.DEV;

const AXIOS_CONFIG: AxiosRequestConfig = {
    baseURL: isDev ? 'http://localhost:3000/' : '/api/'
};

const service = axios.create(AXIOS_CONFIG);

function onRequest(config: AxiosRequestConfig): AxiosRequestConfig {
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
