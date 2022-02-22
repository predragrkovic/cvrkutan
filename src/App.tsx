// import PostCardContent from 'components/molecules/PostCardContent';
import Header from 'components/organisms/Header';

import {useDarkTheme} from 'hooks/useDarkTheme';

import Auth from 'pages/Auth';
import Home from 'pages/Home';
import {useMemo} from 'react';

import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';

import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  const username = localStorage.getItem('username');

  const routes = useMemo(() => {
    const routes = [];
    if (username) {
      routes.push(<Route path="/" element={<Navigate to="/home" />} />);
      routes.push(<Route path="/home" element={<Home />} />);
    } else {
      routes.push(<Route path="/auth" element={<Auth />} />);
    }
    return routes;
  }, [username]);

  return (
    <BrowserRouter>
      <div className={`app ${darkTheme && 'dark'}`}>
        <Header />
        <div className="screen-container">
          <Routes>
            {routes}
            <Route path="/*" element={<Navigate to={username ? '/home' : '/auth'} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
