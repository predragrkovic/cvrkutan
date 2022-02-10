import BottomTabNavigator from 'components/molecules/BottomTabNavigator';
import ChatContainer from 'components/organisms/ChatContainer';
import PostsContainer from 'components/organisms/PostsContainer';
import {useState} from 'react';
import './style.scss';

export const Home = () => {
  const [renderChoice, setRenderChoice] = useState<'chat' | 'posts'>('posts');

  const handlePostsClick = () => {
    setRenderChoice('posts');
  };

  const handleChatClick = () => {
    setRenderChoice('chat');
  };
  return (
    <>
      <PostsContainer isRendered={renderChoice === 'posts'} />
      <ChatContainer isRendered={renderChoice === 'chat'} />
      <BottomTabNavigator
        renderChoice={renderChoice}
        handleChatClick={handleChatClick}
        handlePostsClick={handlePostsClick}
      />
    </>
  );
};
