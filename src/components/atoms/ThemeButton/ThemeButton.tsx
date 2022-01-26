import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';
import './style.scss';

const sun = require('../../../assets/icons/sun.png');
const moon = require('../../../assets/icons/moon.png');

interface ThemeButtonProps {}

export const ThemeButton: FC<ThemeButtonProps> = () => {
  const {darkTheme, setDarkTheme} = useDarkTheme();

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return <img className="image" onClick={handleClick} src={darkTheme ? moon : sun} />;
};
