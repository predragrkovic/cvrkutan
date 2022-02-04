import {FC} from 'react';

import './style.scss';

interface MessageBoxProps {
  username: string;
  text: string;
  timestamp: string;
}

const currentUser = localStorage.getItem('username');

export const MessageBox: FC<MessageBoxProps> = ({username, text, timestamp}) => {
  return (
    <div className="message-container">
      <p className={`message-username ${username == currentUser && 'self'}`}>{username}</p>
      <p className={`message-text ${username == currentUser && 'self'}`}>{text}</p>
      <p className={`message-timestamp ${username == currentUser && 'self'}`}>{timestamp}</p>
    </div>
  );
};
