import ThemeButton from 'components/atoms/ThemeButton';
import {FC} from 'react';
import './style.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="header">
      <p className="logo">Цвpкyтaн</p>
      <ThemeButton />
    </div>
  );
};
