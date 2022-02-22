import {useCallback, useState} from 'react';
import Cookies from 'js-cookie';

export const useCookie = (
  cookieName: string,
): {
  value: string | null;
  updateCookie: (newValue: string, options?: Cookies.CookieAttributes) => void;
  deleteCookie: () => void;
} => {
  const [value, setValue] = useState<string | null>(() => Cookies.get(cookieName) || null);

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(cookieName, newValue, options);
      setValue(newValue);
    },
    [cookieName],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(cookieName);
    setValue(null);
  }, [cookieName]);

  return {value, updateCookie, deleteCookie};
};
