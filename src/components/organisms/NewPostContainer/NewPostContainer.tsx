import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCard from 'components/molecules/NewPostCard';
import {FC} from 'react';

import './style.scss';

interface NewPostContainerProps {}

export const NewPostContainer: FC<NewPostContainerProps> = () => {
  const profilePictureSource = localStorage.getItem('imageUrl');

  return (
    <div className="new-post-container">
      <div className="profile-picture-container">
        <ProfilePicture source={profilePictureSource} />
      </div>
      <NewPostCard />
    </div>
  );
};
