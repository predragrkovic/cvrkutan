import {FC} from 'react';

import './style.scss';

interface ButtonProps {
  onSubmitClick?: () => void;
}

export const SubmitButton: FC<ButtonProps> = ({onSubmitClick}) => {
  return (
    <div className="button" onClick={onSubmitClick}>
      Share
    </div>
  );
};
