import CustomText from 'components/atoms/CustomText';
import ThemeButton from 'components/atoms/ThemeButton';
import {FC} from 'react';
import './style.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <div className="header">
      <CustomText fontSize="large">Цвpкyтaн</CustomText>
      <ThemeButton />
    </div>
  );
};
