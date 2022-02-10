import {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {axiosGet} from 'utilities/api';

export const useAxiosFetch = (url: string, queryParams?: URLSearchParams, headers?: any) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosGet(url, queryParams, headers)
      .then((res) => {
        setResponse(res);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {response, error, isLoading};
};
