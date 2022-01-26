import {ThemeContext} from 'contexts/ThemeContext';
import {useContext} from 'react';

export const useDarkTheme = () => useContext(ThemeContext);
