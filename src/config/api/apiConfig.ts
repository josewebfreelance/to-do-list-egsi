import axios from 'axios';
import {Constants} from '../utilities';
import {getTokenFromSessionStorage} from "../../stores";

axios.defaults.baseURL = Constants.BASEURL;

axios.interceptors.request.use(
    async (config) => {
        try {
            const tokenStorage = getTokenFromSessionStorage();

            if (tokenStorage.token) {
                config.headers['Authorization'] = `Bearer ${tokenStorage.token}`
            }
        } catch (e) {
            console.error('Error al obtener el token:', e);
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('No autorizado, redirigiendo al login...');
        }
        return Promise.reject(error);
    }
);
