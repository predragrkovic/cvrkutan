import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCardContent from 'components/molecules/NewPostCardContent';
import {Card} from 'components/other/Card/Card';
import {FC} from 'react';

import './style.scss';

export const NewPostContainer: FC = () => {
  return (
    <div className="new-post-container">
      <div className="profile-picture-container">
        <ProfilePicture source="https://avatarfiles.alphacoders.com/217/217489.jpg" />
      </div>
      <Card>
        <NewPostCardContent />
      </Card>
    </div>
  );
};
