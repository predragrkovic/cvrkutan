import CustomTimestamp from 'components/atoms/CustomTimestamp';
import ProfilePicture from 'components/atoms/ProfilePicture';
import {useDarkTheme} from 'hooks/useDarkTheme';
import Post from 'models/Post';
import {FC} from 'react';
import './style.scss';

interface PostCardProps {
  post: Post;
}

export const PostCard: FC<PostCardProps> = ({post}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`post-card-container ${darkTheme && 'dark'}`}>
      <div className="post-card-content-left">
        <ProfilePicture source={post.picture} />
      </div>
      <div className="post-card-content-right">
        <div className="post-metadata">
          <div className="full-name">{post.fullname}</div>
          <span>·</span>
          <div className="username">@{post.username}</div>
          <span>·</span>
          <CustomTimestamp timestamp={post.timestamp} />
        </div>
        <div className="post-main-data">
          <p className="title">{post.title}</p>
          <p className="content">{post.content}</p>
        </div>
      </div>
    </div>
  );
};
