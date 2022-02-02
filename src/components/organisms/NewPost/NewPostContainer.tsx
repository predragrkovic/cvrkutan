import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCardContent from 'components/molecules/NewPostCardContent';
import {Card} from 'components/other/Card/Card';
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
      <Card>
        <NewPostCardContent
          onButtonClick={onButtonClick}
          inputPost={inputPost}
          handleInputPost={handleInputPost}
        />
      </Card>
    </div>
  );
};
