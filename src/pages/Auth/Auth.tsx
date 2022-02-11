import {OAUT_CLIENT_ID} from 'constants/keys';
import {useCookie} from 'hooks/useCookie';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {useState} from 'react';

import GoogleLogin from 'react-google-login';
import {FaArrowRight} from 'react-icons/fa';
import {axiosPost} from 'utilities/api';
import './style.scss';

const logo = require('../../assets/images/logo-blue.png');

export const Auth = () => {
  const {updateCookie} = useCookie('accessToken');
  const {darkTheme} = useDarkTheme();

  const [firstTimeLogIn] = useState(true);

  const handleSuccessfulLogin = (googleData: any) => {
    console.log(googleData);
    updateCookie(googleData.accessToken);
    try {
      const response = axiosPost('/api/google-login');
      console.log(response);
    } catch (error: any) {
      console.log('Google login failed. Error:', error.message);
    }
  };

  const handleFailedLogin = (error: any) => {
    console.log('Google login failed. Error:', error);
  };

  return (
    <div className="auth-screen-container">
      <div className={`auth-card ${darkTheme && 'dark'}`}>
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="fields-container">
          <div className="form__group ">
            <input
              type="input"
              className="form__field"
              placeholder="username"
              autoComplete="off"
              required
            />
            <label className="form__label">username</label>
          </div>
          <div className="form__group">
            <input
              type="input"
              className="form__field"
              placeholder="image url"
              autoComplete="off"
              required
            />
            <label className="form__label">image url</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <label>Use google profile data</label>
          </div>
        </div>
        {firstTimeLogIn ? (
          <FaArrowRight size={40} className="arrow-right" />
        ) : (
          <GoogleLogin
            className="google-button"
            clientId={OAUT_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleSuccessfulLogin}
            onFailure={handleFailedLogin}
            cookiePolicy={'single_host_origin'}
            prompt="select_account"
            theme={darkTheme ? 'dark' : 'light'}
          />
        )}
      </div>
    </div>
  );
};
