import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {BASE_URL} from 'constants/api';

export const axiosGet = (path: string) => {
  return axiosRequest('GET', path);
};

const axiosRequest = async (method: 'POST' | 'GET', path: string) => {
  const axiosConfig: AxiosRequestConfig = {
    url: BASE_URL + path,
    method: method,
    timeout: 10000,
  };

  try {
    const response: AxiosResponse = await axios(axiosConfig);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
