import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../configs/Paths';

const axiosApi = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosApi.interceptors.request.use(
  async function (config) {
    try {
      let auth = null;
      await AsyncStorage.getItem('auth').then((res) => {
        auth = res;
      });
      if (
        auth &&
        config.url !== '/auth/login' &&
        config.url !== '/auth/authenticate' &&
        config.url !== '/auth/register'
      ) {
        config.headers.Authorization = `Bearer ${Object.values(JSON.parse(auth))}`;
      }
    } catch (error) {
      console.log('Errorrrrrrrrrrrrrrrrrrr!', error);
      return null;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosApi;
