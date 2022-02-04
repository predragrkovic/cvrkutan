import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCard from 'components/molecules/NewPostCard';
import {ChangeEventHandler, FC} from 'react';

import './style.scss';

interface NewPostContainerProps {
  onButtonClick: () => void;
  inputPost: string;
  inputTitle: string;
  handleInputTitle: ChangeEventHandler<HTMLInputElement>;
  handleInputPost: ChangeEventHandler<HTMLTextAreaElement>;
}

export const NewPostContainer: FC<NewPostContainerProps> = ({
  onButtonClick,
  inputPost,
  inputTitle,
  handleInputPost,
  handleInputTitle,
}) => {
  const profilePictureSource = localStorage.getItem('imageUrl');

  return (
    <div className="new-post-container">
      <div className="profile-picture-container">
        <ProfilePicture source={profilePictureSource} />
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
