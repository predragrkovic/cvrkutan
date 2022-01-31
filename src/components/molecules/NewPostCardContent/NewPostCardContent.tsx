import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import './style.scss';

export const NewPostCardContent = () => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className="new-post-card-container">
      <textarea
        className={`new-post-text ${darkTheme && 'dark'}`}
        placeholder="Share your thoughts..."></textarea>
      <SubmitButton />
    </div>
  );
};
