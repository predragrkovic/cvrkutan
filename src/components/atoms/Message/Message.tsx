import {FC} from 'react';

import './style.scss';

interface MessageProps {
  username: string;
  text: string;
}

export const Message: FC<MessageProps> = ({username, text}) => {
  return (
    <div className="message-container">
      <h3>{username}</h3>
      <p>{text}</p>
    </div>
  );
};
