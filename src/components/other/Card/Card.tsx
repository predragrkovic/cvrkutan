import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';
import './style.scss';

export const Card: FC = ({children}) => {
  const {darkTheme} = useDarkTheme();

  return <div className={`card ${darkTheme ? 'dark' : ''}`}>{children}</div>;
};
