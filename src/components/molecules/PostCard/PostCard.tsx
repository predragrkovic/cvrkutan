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
        <p className="title">{post.title}</p>

        <div className="post-card-content-text">
          <p className="text">{post.content}</p>
        </div>
      </div>
    </div>
  );
};
