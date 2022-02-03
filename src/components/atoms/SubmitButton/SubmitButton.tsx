import {FC} from 'react';

import './style.scss';

interface ButtonProps {
  onSubmitClick?: () => void;
  disabled?: boolean;
}

export const SubmitButton: FC<ButtonProps> = ({onSubmitClick, children, disabled = false}) => {
  return (
    <div className={`button ${disabled && 'disabled'}`} onClick={onSubmitClick}>
      {children}
    </div>
  );
};
