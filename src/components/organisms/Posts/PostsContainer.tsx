import {Card} from 'components/other/Card/Card';
import {FC} from 'react';
import {POSTS} from 'mock/dummy-data';
import PostCardContent from 'components/molecules/PostCardContent';
import Post from 'models/Post';

import './style.scss';
import NewPost from '../NewPost';

export const PostsContainer: FC = () => {
  return (
    <div className="posts-container">
      <NewPost />
      {POSTS.map((post: Post) => {
        console.log(post);
        return (
          <Card key={post.user.username} color="secondary">
            <PostCardContent post={post} />
          </Card>
        );
      })}
    </div>
  );
};
