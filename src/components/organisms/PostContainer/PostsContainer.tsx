import {FC, useState} from 'react';
import PostCard from 'components/molecules/PostCard';
import Post from 'models/Post';
import './style.scss';
import config from 'config.json';
import {usePusher} from 'hooks/usePusher';
import NewPostContainer from '../NewPostContainer';

interface PostsContainerProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsContainerProps> = ({isRendered}) => {
  const [newPost, setNewPost] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');
  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('imageUrl');

  const posts: Post[] = usePusher('board', 'post');

  const handleInputPost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleNewPostClick = async () => {
    if (!newPost) return;
    if (!username) return;
    if (!profileImage) return;

    await fetch(`http://${config.api_address}:8000/api/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        picture: profileImage,
        title: newTitle,
        content: newPost,
      }),
    });

    setNewPost('');
  };

  return (
    <div className={`posts-container ${!isRendered && 'hide'}`}>
      <NewPostContainer
        onButtonClick={handleNewPostClick}
        inputPost={newPost}
        inputTitle={newTitle}
        handleInputPost={handleInputPost}
        handleInputTitle={handleInputTitle}
      />
      <div className="scroll-div">
        {posts.map((post: Post) => {
          return <PostCard key={post.username} post={post} />;
        })}
      </div>
    </div>
  );
};
