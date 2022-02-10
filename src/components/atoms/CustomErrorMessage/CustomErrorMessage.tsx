import {FC} from 'react';
import {FaCogs, FaWrench} from 'react-icons/fa';
import './style.scss';

export const CustomErrorMessage: FC = ({children}) => {
  return (
    <div className="error-message-container">
      <FaWrench className="error-message-icon-left" size={35} />
      <p className="error-message-text">{children}</p>
      <FaCogs className="error-message-icon-right" size={35} />
    </div>
  );
};
