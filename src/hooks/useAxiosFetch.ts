import {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';
import {axiosGet} from 'utils/api';

export const useAxiosFetch = (url: string) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosGet(url)
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
