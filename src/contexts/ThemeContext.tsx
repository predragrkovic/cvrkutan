import {createContext, useState} from 'react';

export interface ContextTypes {
  darkTheme: boolean;
  setDarkTheme: (val: boolean) => void;
}

const contextDefaultValues: ContextTypes = {
  darkTheme: false,
  setDarkTheme: () => undefined,
};

interface Props {}

export const ThemeContext = createContext<ContextTypes>(contextDefaultValues);

export const ThemeContextProvider: React.FC<Props> = ({children}) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  const handleSetDarkTheme = (val: boolean) => {
    setDarkTheme(val);
  };

  const value = {
    darkTheme: darkTheme,
    setDarkTheme: handleSetDarkTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
