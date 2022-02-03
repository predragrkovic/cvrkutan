import MessageBox from 'components/atoms/Message';
import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import Message from 'models/Message';
import {FC, useEffect, useState} from 'react';
import Pusher from 'pusher-js';
import config from 'config.json';

import './style.scss';

export const ChatCard: FC = () => {
  const {darkTheme} = useDarkTheme();
  const username = localStorage.getItem('username');
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const pusher = new Pusher('d6bf8ef287243e8f9e13', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', function (data: Message) {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });
  }, []);

  if (!username) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
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
    }
  };

  return (
    <div className={`chat-card-container ${darkTheme && 'dark'}`}>
      <div className={`scroll-div ${darkTheme && 'dark'}`}>
        {messages.map((message: Message, index: number) => {
          return <MessageBox username={message.username} text={message.message} key={index} />;
        })}
      </div>
      <textarea
        className={`input-message ${darkTheme && 'dark'}`}
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}></textarea>
      <SubmitButton disabled={isSending} onSubmitClick={handleSubmit}>
        Send
      </SubmitButton>
    </div>
  );
};
