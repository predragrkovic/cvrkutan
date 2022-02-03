import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCard from 'components/molecules/NewPostCard';
import {ChangeEventHandler, FC} from 'react';

import './style.scss';

interface NewPostCardProps {
  onButtonClick: () => void;
  inputPost: string;
  handleInputPost: ChangeEventHandler<HTMLTextAreaElement>;
}

export const NewPostContainer: FC<NewPostCardProps> = ({
  onButtonClick,
  inputPost,
  handleInputPost,
}) => {
  return (
    <div className="new-post-container">
      <div className="profile-picture-container">
        <ProfilePicture source="https://avatarfiles.alphacoders.com/217/217489.jpg" />
      </div>

      <NewPostCard
        onButtonClick={onButtonClick}
        inputPost={inputPost}
        handleInputPost={handleInputPost}
      />
    </div>
  );
};
