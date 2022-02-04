// import PostCardContent from 'components/molecules/PostCardContent';
import BottomTabNavigator from 'components/molecules/BottomTabNavigator';
import ChatContainer from 'components/organisms/ChatContainer';
import Header from 'components/organisms/Header';
import PostsContainer from 'components/organisms/PostContainer';
import UserIdentificationModal from 'components/organisms/UserIdentification';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {useState} from 'react';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();
  const [renderChoice, setRenderChoice] = useState<'chat' | 'posts'>('posts');

  const handlePostsClick = () => {
    setRenderChoice('posts');
  };

  const handleChatClick = () => {
    setRenderChoice('chat');
  };

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Header />
      <div className={`screen-container`}>
        <div className="padding-div"></div>
        <PostsContainer isRendered={renderChoice === 'posts'} />
        <ChatContainer isRendered={renderChoice === 'chat'} />
        <div className="padding-div"></div>
      </div>
      <BottomTabNavigator
        renderChoice={renderChoice}
        handleChatClick={handleChatClick}
        handlePostsClick={handlePostsClick}
      />
      <UserIdentificationModal />
    </div>
  );
}

export default App;
