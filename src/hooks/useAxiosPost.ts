import {AxiosResponse} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {axiosPost as sendAxiosPostRequest} from 'utilities/api';

export const useAxiosPost = (): {
  axiosPost: (url: string) => void;
  response: AxiosResponse | null;
  error: Error | null;
  isLoading: boolean;
} => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const axiosPost = useCallback(async (url) => {
    setIsLoading(true);
    try {
      const response = await sendAxiosPostRequest(url);
      setResponse(response);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setError(null), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  return {axiosPost, response, error, isLoading};
};
