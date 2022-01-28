import ChatCardContent from 'components/molecules/ChatCardContent';
import {Card} from 'components/other/Card/Card';
import {FC} from 'react';

import './style.scss';

export const ChatContainer: FC = () => {
  return (
    <div className="chat-container">
      <Card>
        <ChatCardContent />
      </Card>
    </div>
  );
};
