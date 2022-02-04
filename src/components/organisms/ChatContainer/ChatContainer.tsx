import ChatCard from 'components/molecules/ChatCard';
import {FC} from 'react';

import './style.scss';

interface ChatContainerProps {
  isRendered: boolean;
}

export const ChatContainer: FC<ChatContainerProps> = ({isRendered}) => {
  return (
    <div className={`chat-container ${!isRendered && 'hide'}`}>
      <ChatCard />
    </div>
  );
};
