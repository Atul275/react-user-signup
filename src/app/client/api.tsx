import axios, { AxiosRequestConfig } from 'axios';
import * as Qs from 'qs';
import * as cookie from 'src/app/utils/cookie';

export const appApi = axios.create({
    baseURL: process.env.REACT_APP_PAYROLL_HOST,
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    paramsSerializer(params: any) {
        return Qs.stringify(params, { arrayFormat: 'brackets' });
    }
});

appApi.interceptors.request.use((config: AxiosRequestConfig) => {
    let token: string = cookie.get(cookie.AUTHENTICAT_TOKEN);
    if (token) {
        config.headers = { 'Authorization': `Bearer ${token}` };
    }
    return config;
});

export const getCheckBackend = () => appApi.get(`/`);