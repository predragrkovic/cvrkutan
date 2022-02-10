// import PostCardContent from 'components/molecules/PostCardContent';
import Header from 'components/organisms/Header';
import UserIdentificationModal from 'components/organisms/UserIdentification';
import {useDarkTheme} from 'hooks/useDarkTheme';
import Auth from 'pages/Auth';
// import Home from 'pages/Home';
// import {BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Header />
      <div className="screen-container">
        {/* <Home /> */}
        <Auth />
      </div>
      <UserIdentificationModal />
    </div>
  );
}

export default App;
