import axios from 'axios';
import { HinatazakaApi, AuthApi } from '../../api';
import store from './store';
import sessionSlice from '../redux/session/sessionSlice';

export const customAxios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

customAxios.interceptors.request.use(
  (config) => {
    config.headers['X-CSRF-Token'] = store.getState().session.csrfToken;
    return config;
  },
  (error) => Promise.reject(error)
);

const { setCsrfToken } = sessionSlice.actions;

customAxios.interceptors.response.use(
  (response) => {
    if (response.headers['x-csrf-token']) {
      store.dispatch(setCsrfToken(response.headers['x-csrf-token']));
    }
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

export const authApi = new AuthApi(undefined, undefined, customAxios);

export const hinatazakaApi = new HinatazakaApi(
  undefined,
  undefined,
  customAxios
);
