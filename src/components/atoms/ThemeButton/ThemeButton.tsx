import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC, useState} from 'react';
import './style.scss';

const sun = require('../../../assets/icons/sun.png');
const moon = require('../../../assets/icons/moon.png');

interface ThemeButtonProps {}

export const ThemeButton: FC<ThemeButtonProps> = () => {
  const {setDarkTheme} = useDarkTheme();
  const [sunPosition, setSunPosition] = useState(0);
  const [moonPosition, setMoonPosition] = useState(-100);

  const setDarkThemeHandler = () => {
    setDarkTheme(true);
    setSunPosition(0);
    setMoonPosition(-100);
  };

  const setLightThemeHandler = () => {
    setDarkTheme(false);
    setSunPosition(-100);
    setMoonPosition(0);
  };

  return (
    <div className="theme-image-container">
      <img
        style={{...styles, transform: 'translateY(' + sunPosition + 'px)'}}
        className="theme-image"
        onClick={setLightThemeHandler}
        src={sun}
      />
      <img
        style={{...styles, transform: 'translateY(' + moonPosition + 'px)'}}
        className="theme-image"
        onClick={setDarkThemeHandler}
        src={moon}
      />
    </div>
  );
};

const styles = {
  transition: 'all 0.2s linear',
};
