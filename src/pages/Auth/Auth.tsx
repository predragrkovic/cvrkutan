import {OAUT_CLIENT_ID} from 'constants/keys';
import {useCookie} from 'hooks/useCookie';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {useEffect, useState} from 'react';

import GoogleLogin from 'react-google-login';
import {FaArrowRight} from 'react-icons/fa';
import './style.scss';

const logo = require('../../assets/images/logo-blue.png');

export const Auth = () => {
  const {updateCookie} = useCookie('accessToken');
  const {darkTheme} = useDarkTheme();

  const [useGoogleProfileData, setUseGoogleProfileData] = useState(true);
  const [googleData, setGoogleData] = useState<any | null>(null);

  const [imageUrl, setImageUrl] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (useGoogleProfileData && googleData) {
      setUsername(googleData.profileObj.email);
      setImageUrl(googleData.profileObj.imageUrl);
      setName(googleData.profileObj.name);
    }
  }, [useGoogleProfileData]);

  const onCheckboxClick = () => {
    setUseGoogleProfileData(!useGoogleProfileData);
  };

  const handleInputImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSuccessfulLogin = async (googleData: any) => {
    updateCookie(googleData.accessToken);

    setUsername(googleData.profileObj.email);
    setImageUrl(googleData.profileObj.imageUrl);
    setName(googleData.profileObj.name);

    setGoogleData(googleData);

    try {
      //  const response = await axiosPost('/api/google-login');
      // if acc is created -> enable custom data than go to app
      // if acc exists -> go to app
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
        {googleData ? (
          <div className="fields-container">
            <div className="form__group ">
              <input
                type="input"
                className={`form__field ${useGoogleProfileData && 'disabled'}`}
                placeholder="name"
                autoComplete="off"
                required
                value={name}
                disabled={useGoogleProfileData}
                onChange={handleInputName}
              />
              <label className="form__label">username</label>
            </div>
            <div className="form__group ">
              <input
                type="input"
                className={`form__field ${useGoogleProfileData && 'disabled'}`}
                placeholder="username"
                autoComplete="off"
                required
                value={username}
                disabled={useGoogleProfileData}
                onChange={handleInputUsername}
              />
              <label className="form__label">username</label>
            </div>
            <div className="form__group">
              <input
                type="input"
                className={`form__field ${useGoogleProfileData && 'disabled'}`}
                placeholder="image url"
                autoComplete="off"
                required
                value={imageUrl}
                disabled={useGoogleProfileData}
                onChange={handleInputImageUrl}
              />
              <label className="form__label">image url</label>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" checked={useGoogleProfileData} onClick={onCheckboxClick} />
              <label>Use google profile data</label>
            </div>
          </div>
        ) : null}

        {googleData ? (
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
