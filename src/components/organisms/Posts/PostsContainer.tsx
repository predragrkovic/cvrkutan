import {FC, useEffect, useState} from 'react';
import PostCard from 'components/molecules/PostCard';
import Post from 'models/Post';

import './style.scss';
import NewPost from '../NewPost';
import Pusher from 'pusher-js';
import config from 'config.json';

interface PostsProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsProps> = ({isRendered}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');
  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('imageUrl');

  useEffect(() => {
    const pusher = new Pusher('d6bf8ef287243e8f9e13', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('board');
    channel.bind('post', function (data: Post) {
      console.log(data);
      setPosts((posts) => [...posts, data]);
    });
  }, []);

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
      <NewPost
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
