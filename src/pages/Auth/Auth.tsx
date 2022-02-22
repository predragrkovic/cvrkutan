import {useDarkTheme} from 'hooks/useDarkTheme';
import {useState} from 'react';
import {FaArrowRight} from 'react-icons/fa';
import './style.scss';

const logo = require('../../assets/images/logo-blue.png');

export const Auth = () => {
  const {darkTheme} = useDarkTheme();

  const [pictureUrl, setPictureUrl] = useState('');
  const [username, setUsername] = useState('');

  const handleInputPictureUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPictureUrl(e.target.value);
  };

  const handleInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onArrowClickHandler = () => {
    if (!pictureUrl || !username) return;

    localStorage.setItem('username', username);
    localStorage.setItem('pictureUrl', pictureUrl);

    window.location.reload();
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
              className={`form__field`}
              placeholder="username"
              autoComplete="off"
              required
              value={username}
              onChange={handleInputUsername}
            />
            <label className="form__label">username</label>
          </div>
          <div className="form__group">
            <input
              type="input"
              className={`form__field`}
              placeholder="image url"
              autoComplete="off"
              required
              value={pictureUrl}
              onChange={handleInputPictureUrl}
            />
            <label className="form__label">picture url</label>
          </div>
        </div>

        <FaArrowRight onClick={onArrowClickHandler} size={40} className="arrow-right" />
      </div>
    </div>
  );
};
