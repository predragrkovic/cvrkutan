import {FC} from 'react';

import './style.scss';

interface MessageProps {
  username: string;
  text: string;
}

const currentUser = localStorage.getItem('username');

export const Message: FC<MessageProps> = ({username, text}) => {
  console.log(username);
  console.log(currentUser);
  console.log(username === currentUser);
  return (
    <div className={`message-container ${username == currentUser && 'self'}`}>
      <p className={`message-username ${username == currentUser && 'self'}`}>{username}</p>
      <p className="message-text">{text}</p>
    </div>
  );
};
