import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {ChangeEventHandler, FC} from 'react';
import './style.scss';

interface NewPostCardProps {
  onButtonClick: () => void;
  inputPost: string;
  handleInputPost: ChangeEventHandler<HTMLTextAreaElement>;
}

export const NewPostCard: FC<NewPostCardProps> = ({onButtonClick, inputPost, handleInputPost}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`new-post-card-container ${darkTheme && 'dark'}`}>
      <textarea
        value={inputPost}
        onChange={handleInputPost}
        className={`new-post-text ${darkTheme && 'dark'}`}
        placeholder="Share your thoughts..."></textarea>
      <SubmitButton onSubmitClick={onButtonClick}>Share</SubmitButton>
    </div>
  );
};
