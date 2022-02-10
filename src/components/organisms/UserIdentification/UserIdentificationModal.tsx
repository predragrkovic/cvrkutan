import {useState} from 'react';
import './style.scss';

export const UserIdentificationModal = () => {
  const [userIdentified, setUserIdentified] = useState<boolean>(
    localStorage.getItem('username') ? true : false,
  );

  const [username, setUsername] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const identifyUserHandler = () => {
    localStorage.setItem('username', username);
    localStorage.setItem('imageUrl', imageUrl);
    setUserIdentified(true);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  if (userIdentified) return null;

  return (
    <div className="modal-container">
      <div className="modal">
        <input
          type="input"
          className="input"
          placeholder="username"
          name="name"
          id="name"
          autoComplete="off"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="input"
          className="input"
          placeholder="image url"
          name="name"
          id="name"
          autoComplete="off"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <button
          disabled={!username || !imageUrl ? true : false}
          onClick={identifyUserHandler}
          className="modal-button">
          Done
        </button>
      </div>
    </div>
  );
};
