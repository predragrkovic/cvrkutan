import {useDarkTheme} from 'hooks/useDarkTheme';
import './style.scss';

export const NewPostCardContent = () => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className="new-post-card-container">
      <textarea className={`new-post-text ${darkTheme && 'dark'}`}></textarea>
      <div className="button">Share</div>
    </div>
  );
};
