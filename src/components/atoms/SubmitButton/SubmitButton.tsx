import {FC} from 'react';

import './style.scss';

interface ButtonProps {
  onSubmitClick?: () => void;
}

export const SubmitButton: FC<ButtonProps> = ({onSubmitClick, children}) => {
  return (
    <div className="button" onClick={onSubmitClick}>
      {children}
    </div>
  );
};
