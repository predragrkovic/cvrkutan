import {FC} from 'react';
import PostCard from 'components/molecules/PostCard';
import Post from 'models/Post';
import './style.scss';
import NewPostContainer from '../NewPostContainer';
import {useAxiosFetch} from 'hooks/useAxiosFetch';
import {usePusher} from 'hooks/usePusher';
import InfiniteLoader from 'components/atoms/InfiniteLoader';
import CustomErrorMessage from 'components/atoms/CustomErrorMessage';
import {POSTS_URL} from 'constants/paths';

interface PostsContainerProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsContainerProps> = ({isRendered}) => {
  const pusherPosts: Post[] = usePusher('board', 'post');
  const {response, isLoading, error} = useAxiosFetch(POSTS_URL);

  return (
    <div className={`posts-container ${!isRendered && 'hide'}`}>
      <NewPostContainer />
      {isLoading && <InfiniteLoader />}
      {error && <CustomErrorMessage>Could not show posts - {error.message}</CustomErrorMessage>}
      {response && (
        <div className="scroll-div">
          {response?.data.map((post: Post) => {
            return <PostCard key={post.username} post={post} />;
          })}
          {pusherPosts.map((post: Post) => {
            return <PostCard key={post.username} post={post} />;
          })}
        </div>
      )}
    </div>
  );
};
