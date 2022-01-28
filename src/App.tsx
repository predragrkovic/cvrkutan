// import PostCardContent from 'components/molecules/PostCardContent';
import Header from 'components/organisms/Header';
import Posts from 'components/organisms/Posts';
import {useDarkTheme} from 'hooks/useDarkTheme';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Header />
      <div className={`screen-container`}>
        <div className="padding-div"></div>
        <Posts />
        <div className="chat-container"></div>
        <div className="padding-div"></div>
      </div>
    </div>
  );
}

export default App;
