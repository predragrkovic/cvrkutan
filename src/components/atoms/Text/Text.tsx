import {FC} from 'react';
import './style.scss';

interface TextProps {
  fontSize?: 'small' | 'medium' | 'large';
}

export const Text: FC<TextProps> = ({children, fontSize}) => {
  return (
    <div className="text-container">
      <p className={fontSize}>{children}</p>
    </div>
  );
};
