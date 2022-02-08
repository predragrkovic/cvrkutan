import ProfilePicture from 'components/atoms/ProfilePicture';
import {useDarkTheme} from 'hooks/useDarkTheme';
import Post from 'models/Post';
import {FC} from 'react';
import './style.scss';

interface PostCardProps {
  post: Post;
}

const username = 'elonski';

export const PostCard: FC<PostCardProps> = ({post}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`post-card-container ${darkTheme && 'dark'}`}>
      <div className="post-card-content-left">
        <ProfilePicture source={post.picture} />
      </div>
      <div className="post-card-content-right">
        <div className="post-metadata">
          <div className="full-name">Elon Musk</div>
          <span>·</span>
          <div className="username">@{username}</div>
          <span>·</span>
          <div className="timestamp">20. Jan. 2020.</div>
        </div>
        <div className="post-main-data">
          <p className="title">{post.title}</p>
          <p className="content">{post.content}</p>
        </div>
      </div>
    </div>
  );
};
