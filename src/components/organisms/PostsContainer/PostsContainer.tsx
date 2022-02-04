import {FC} from 'react';
import PostCard from 'components/molecules/PostCard';
import Post from 'models/Post';
import './style.scss';
import {usePusher} from 'hooks/usePusher';
import NewPostContainer from '../NewPostContainer';

interface PostsContainerProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsContainerProps> = ({isRendered}) => {
  const posts: Post[] = usePusher('board', 'post');

  return (
    <div className={`posts-container ${!isRendered && 'hide'}`}>
      <NewPostContainer />
      <div className="scroll-div">
        {posts.map((post: Post) => {
          return <PostCard key={post.username} post={post} />;
        })}
      </div>
    </div>
  );
};
