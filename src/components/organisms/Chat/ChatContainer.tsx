import ChatCardContent from 'components/molecules/ChatCardContent';
import {Card} from 'components/other/Card/Card';
import {FC} from 'react';

import './style.scss';

interface ChatProps {
  isRendered: boolean;
}

export const ChatContainer: FC<ChatProps> = ({isRendered}) => {
  return (
    <div className={`chat-container ${!isRendered && 'hide'}`}>
      <Card>
        <ChatCardContent />
      </Card>
    </div>
  );
};
