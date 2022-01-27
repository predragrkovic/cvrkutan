import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';
import './style.scss';

interface CardProps {
  accentColour: string;
}

export const Card: FC<CardProps> = ({children}) => {
  const {darkTheme} = useDarkTheme();

  return <div className={`card ${darkTheme ? 'dark' : ''}`}>{children}</div>;
};
