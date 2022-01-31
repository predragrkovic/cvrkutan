// import PostCardContent from 'components/molecules/PostCardContent';
import BottomTabNavigator from 'components/molecules/BottomTabNavigator';
import Chat from 'components/organisms/Chat';
import Header from 'components/organisms/Header';
import Posts from 'components/organisms/Posts';
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
        <Posts isRendered={renderChoice === 'posts'} />
        <Chat isRendered={renderChoice === 'chat'} />
        <div className="padding-div"></div>
      </div>
      <BottomTabNavigator
        renderChoice={renderChoice}
        handleChatClick={handleChatClick}
        handlePostsClick={handlePostsClick}
      />
    </div>
  );
}

export default App;
