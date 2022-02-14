// import PostCardContent from 'components/molecules/PostCardContent';
import Header from 'components/organisms/Header';
import UserIdentificationModal from 'components/organisms/UserIdentification';
import {useCookie} from 'hooks/useCookie';
import {useDarkTheme} from 'hooks/useDarkTheme';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import {useMemo} from 'react';

import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();
  const {value} = useCookie('accessToken');

  const routes = useMemo(() => {
    const routes = [];
    if (value) {
      routes.push(<Route path="/" element={<Navigate to="/home" />} />);
      routes.push(<Route path="/home" element={<Home />} />);
    } else {
      routes.push(<Route path="/auth" element={<Auth />} />);
    }
    return routes;
  }, [value]);

  return (
    <BrowserRouter>
      <div className={`app ${darkTheme && 'dark'}`}>
        <Header />
        <div className="screen-container">
          <Routes>
            {routes}
            <Route path="/*" element={<Navigate to={value ? '/home' : '/auth'} />} />
          </Routes>
        </div>
        <UserIdentificationModal />
      </div>
    </BrowserRouter>
  );
}

export default App;
