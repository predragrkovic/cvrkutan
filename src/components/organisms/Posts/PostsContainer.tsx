import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCardContent from 'components/molecules/NewPostCardContent';
import {Card} from 'components/other/Card/Card';
import {FC} from 'react';
import {POSTS} from 'mock/dummy-data';
import PostCardContent from 'components/molecules/PostCardContent';
import Post from 'models/Post';

import './style.scss';

export const PostsContainer: FC = () => {
  return (
    <div className="posts-container">
      <div className="new-post-container">
        <div className="profile-picture-container">
          <ProfilePicture source="https://avatarfiles.alphacoders.com/217/217489.jpg" />
        </div>
        <Card>
          <NewPostCardContent />
        </Card>
      </div>

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
