import {FC} from 'react';

import './style.scss';

interface SubmitButtonProps {
  onSubmitClick?: () => void;
  disabled?: boolean;
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  onSubmitClick,
  children,
  disabled = false,
}) => {
  return (
    <div className={`button ${disabled && 'disabled'}`} onClick={onSubmitClick}>
      {children}
    </div>
  );
};
