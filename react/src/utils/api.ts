import axios from 'axios';
import { HinatazakaApi } from '../../api';

export const customAxios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response;
    switch (status) {
      case 404:
        window.location.assign('/error/404');
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export const hinatazakaApi = new HinatazakaApi(
  undefined,
  undefined,
  customAxios
);
