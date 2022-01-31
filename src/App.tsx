// import PostCardContent from 'components/molecules/PostCardContent';
import Chat from 'components/organisms/Chat';
import Header from 'components/organisms/Header';
import Posts from 'components/organisms/Posts';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {useState} from 'react';
import './App.scss';
import {FaComment, FaReddit} from 'react-icons/fa';

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
      <div className={`buttons-container ${darkTheme && 'dark'}`}>
        <div
          onClick={handlePostsClick}
          className={`button ${renderChoice === 'posts' && 'selected'}`}>
          <FaReddit size={renderChoice === 'posts' ? 40 : 20} />
        </div>
        <div
          onClick={handleChatClick}
          className={`button ${renderChoice === 'chat' && 'selected'}`}>
          <FaComment size={renderChoice === 'chat' ? 40 : 20} />
        </div>
      </div>
    </div>
  );
}

export default App;
