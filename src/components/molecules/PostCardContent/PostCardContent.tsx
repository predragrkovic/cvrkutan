import Post from 'models/Post';
import {FC} from 'react';
import './style.scss';

interface PostCardContentProps {
  post: Post;
}

export const PostCardContent: FC<PostCardContentProps> = ({post}) => {
  return (
    <div className="post-card-content-container">
      <div className="post-card-content-left">
        <img className="profile-picture" src={post.user.picture} />
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
