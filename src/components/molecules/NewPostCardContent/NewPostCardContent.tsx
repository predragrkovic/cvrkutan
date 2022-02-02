import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {ChangeEventHandler, FC} from 'react';
import './style.scss';

interface NewPostCardContentProps {
  onButtonClick: () => void;
  inputPost: string;
  handleInputPost: ChangeEventHandler<HTMLTextAreaElement>;
}

export const NewPostCardContent: FC<NewPostCardContentProps> = ({
  onButtonClick,
  inputPost,
  handleInputPost,
}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className="new-post-card-container">
      <textarea
        value={inputPost}
        onChange={handleInputPost}
        className={`new-post-text ${darkTheme && 'dark'}`}
        placeholder="Share your thoughts..."></textarea>
      <SubmitButton onSubmitClick={onButtonClick} />
    </div>
  );
};
