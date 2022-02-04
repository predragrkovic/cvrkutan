import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {ChangeEventHandler, FC} from 'react';
import './style.scss';

interface NewPostCardProps {
  onButtonClick: () => void;
  inputPost: string;
  inputTitle: string;
  handleInputTitle: ChangeEventHandler<HTMLInputElement>;
  handleInputPost: ChangeEventHandler<HTMLTextAreaElement>;
}

export const NewPostCard: FC<NewPostCardProps> = ({
  onButtonClick,
  inputPost,
  handleInputPost,
  inputTitle,
  handleInputTitle,
}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`new-post-card-container ${darkTheme && 'dark'}`}>
      <input
        className={`new-post-title ${darkTheme && 'dark'}`}
        value={inputTitle}
        onChange={handleInputTitle}
        placeholder="Наслов [опционално]..."
      />
      <textarea
        value={inputPost}
        onChange={handleInputPost}
        className={`new-post-text ${darkTheme && 'dark'}`}
        placeholder="Подели своје мисли..."></textarea>
      <SubmitButton onSubmitClick={onButtonClick}>Подели</SubmitButton>
    </div>
  );
};
