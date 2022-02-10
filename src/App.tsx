// import PostCardContent from 'components/molecules/PostCardContent';
import Header from 'components/organisms/Header';
import UserIdentificationModal from 'components/organisms/UserIdentification';
import {useDarkTheme} from 'hooks/useDarkTheme';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  return (
    <BrowserRouter>
      <div className={`app ${darkTheme && 'dark'}`}>
        <Header />
        <div className="screen-container">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
        <UserIdentificationModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
