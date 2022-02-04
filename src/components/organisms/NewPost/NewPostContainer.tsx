import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCard from 'components/molecules/NewPostCard';
import {ChangeEventHandler, FC} from 'react';

import './style.scss';

interface NewPostCardProps {
  onButtonClick: () => void;
  inputPost: string;
  inputTitle: string;
  handleInputTitle: ChangeEventHandler<HTMLInputElement>;
  handleInputPost: ChangeEventHandler<HTMLTextAreaElement>;
}

export const NewPostContainer: FC<NewPostCardProps> = ({
  onButtonClick,
  inputPost,
  inputTitle,
  handleInputPost,
  handleInputTitle,
}) => {
  return (
    <div className="new-post-container">
      <div className="profile-picture-container">
        <ProfilePicture source="https://avatarfiles.alphacoders.com/217/217489.jpg" />
      </div>

      <NewPostCard
        onButtonClick={onButtonClick}
        inputPost={inputPost}
        inputTitle={inputTitle}
        handleInputPost={handleInputPost}
        handleInputTitle={handleInputTitle}
      />
    </div>
  );
};
