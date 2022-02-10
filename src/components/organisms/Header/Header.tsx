import ThemeButton from 'components/atoms/ThemeButton';
import {FC} from 'react';
import './style.scss';
const logoWhite = require('../../../assets/images/logo-white.png');

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <p className="logo-text">Цвpкyтaн</p>
        <img src={logoWhite} className="logo-image" />
      </div>
      <ThemeButton />
    </div>
  );
};
