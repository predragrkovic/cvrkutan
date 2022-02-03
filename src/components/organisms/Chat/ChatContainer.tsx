import ChatCard from 'components/molecules/ChatCard';
import {FC} from 'react';

import './style.scss';

interface ChatProps {
  isRendered: boolean;
}

export const ChatContainer: FC<ChatProps> = ({isRendered}) => {
  return (
    <div className={`chat-container ${!isRendered && 'hide'}`}>
      <ChatCard />
    </div>
  );
};
