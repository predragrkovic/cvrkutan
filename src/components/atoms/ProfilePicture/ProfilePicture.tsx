import {FC} from 'react';
import './style.scss';

interface ProfilePictureProps {
  source: string;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({source}) => {
  return <img className="profile-picture" src={source} />;
};
