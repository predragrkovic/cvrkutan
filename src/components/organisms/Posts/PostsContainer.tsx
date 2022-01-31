import {Card} from 'components/other/Card/Card';
import {FC} from 'react';
import {POSTS} from 'mock/dummy-data';
import PostCardContent from 'components/molecules/PostCardContent';
import Post from 'models/Post';

import './style.scss';
import NewPost from '../NewPost';

interface PostsProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsProps> = ({isRendered}) => {
  return (
    <div className={`posts-container ${!isRendered && 'hide'}`}>
      <NewPost />
      <div className="scroll-div">
        {POSTS.map((post: Post) => {
          return (
            <Card key={post.user.username} color="secondary">
              <PostCardContent post={post} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
