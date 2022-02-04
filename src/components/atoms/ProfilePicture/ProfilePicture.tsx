import {FC} from 'react';
import './style.scss';

interface ProfilePictureProps {
  source: string | null;
}

const placeholderImage =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const ProfilePicture: FC<ProfilePictureProps> = ({source}) => {
  return <img className="profile-picture" src={source ? source : placeholderImage} />;
};
