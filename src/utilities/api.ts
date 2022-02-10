import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {BASE_URL} from 'constants/api';

/**
 *
 * @param path url
 * @param queryParams params sent in url
 * @param headers additional headers
 * @returns axios response promise
 */
export const axiosGet = (path: string, queryParams?: URLSearchParams, headers?: any) => {
  return axiosRequest('GET', path, queryParams, headers);
};

/**
 *
 * @param path url
 * @param queryParams params sent in url
 * @param body data sent in body
 * @param headers additional headers
 * @returns axios response promise
 */
export const axiosPost = (
  path: string,
  body?: any,
  queryParams?: URLSearchParams,
  headers?: any,
) => {
  return axiosRequest('POST', path, body, queryParams, headers);
};

const axiosRequest = async (
  method: 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT',
  path: string,
  body?: any,
  headers?: any,
  queryParams?: URLSearchParams,
) => {
  const axiosConfig: AxiosRequestConfig = {
    url: BASE_URL + path,
    method: method,
    timeout: 10000,
    params: queryParams,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  // sets `data` to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', 'DELETE', and 'PATCH'
  if (method !== 'GET' && body) axiosConfig.data = body;

  try {
    const response: AxiosResponse = await axios(axiosConfig);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
