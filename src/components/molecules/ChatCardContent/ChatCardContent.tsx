import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';

import './style.scss';

export const ChatCardContent: FC = () => {
  const {darkTheme} = useDarkTheme();
  return (
    <div className="chat-card-container">
      <div className={`scroll-div ${darkTheme && 'dark'}`}></div>
      <textarea
        className={`input-message ${darkTheme && 'dark'}`}
        placeholder="Type your message..."></textarea>
      <SubmitButton />
    </div>
  );
};
