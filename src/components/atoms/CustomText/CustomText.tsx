import {FC} from 'react';
import './style.scss';

interface TextProps {
  fontSize?: 'small' | 'medium' | 'large';
}

export const CustomText: FC<TextProps> = ({children, fontSize}) => {
  return (
    <div className="text-container">
      <p className={fontSize}>{children}</p>
    </div>
  );
};
