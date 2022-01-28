import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';
import './style.scss';

interface CardProps {
  color?: string;
}

export const Card: FC<CardProps> = ({children, color}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`card ${darkTheme ? 'dark' : ''} ${color && 'secondary'}`}>{children}</div>
  );
};
