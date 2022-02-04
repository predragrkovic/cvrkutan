import MessageBox from 'components/atoms/Message';
import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';

import {FC, useEffect, useRef, useState} from 'react';
import config from 'config.json';

import './style.scss';
import {usePusher} from 'hooks/usePusher';
import {Message} from 'models/Message';

export const ChatCard: FC = () => {
  const username = localStorage.getItem('username');

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const {darkTheme} = useDarkTheme();
  const messages: Message[] = usePusher('chat', 'message');

  const [message, setMessage] = useState<string>();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPressOnInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) handleSubmit();
  };

  const handleSubmit = async () => {
    if (!message) return;
    try {
      setIsSending(true);
      await fetch(`http://${config.api_address}:8000/api/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          message,
        }),
      });

      setMessage('');
    } catch (error: any) {
      console.log('Sending message failed. Error:', error);
    } finally {
      setIsSending(false);
      focusTextArea();
    }
  };

  const scrollToBottom = () => {
    if (!chatContainerRef || !chatContainerRef.current) return;

    const element = chatContainerRef.current;
    element.scroll({
      top: element.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const focusTextArea = () => {
    if (!messageInputRef || !messageInputRef.current) return;

    messageInputRef.current.focus();
  };

  if (!username) return null;

  return (
    <div className={`chat-card-container ${darkTheme && 'dark'}`}>
      <div ref={chatContainerRef} className={`scroll-div ${darkTheme && 'dark'}`}>
        {messages.map((message: Message, index: number) => {
          return (
            <MessageBox
              username={message.username}
              text={message.message}
              timestamp={message.timestamp}
              key={index}
            />
          );
        })}
      </div>
      <textarea
        ref={messageInputRef}
        disabled={isSending}
        onKeyPress={(e) => handleKeyPressOnInput(e)}
        className={`input-message ${darkTheme && 'dark'}`}
        placeholder="Упиши своју поруку..."
        value={message}
        onChange={handleInputChange}></textarea>
      <SubmitButton disabled={isSending} onSubmitClick={handleSubmit}>
        Пошаљи
      </SubmitButton>
    </div>
  );
};
