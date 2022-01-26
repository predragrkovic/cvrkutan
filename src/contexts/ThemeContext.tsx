import {createContext, useState} from 'react';

export interface ContextTypes {
  darkTheme: boolean;
  goDark: (val: boolean) => void;
}

const contextDefaultValues: ContextTypes = {
  darkTheme: false,
  goDark: () => undefined,
};

interface Props {}

export const ThemeContext = createContext<ContextTypes>(contextDefaultValues);

export const ThemeContextProvider: React.FC<Props> = ({children}) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const handleGoDark = (val: boolean) => {
    setDarkTheme(val);
  };

  const value = {
    darkTheme: darkTheme,
    goDark: handleGoDark,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
