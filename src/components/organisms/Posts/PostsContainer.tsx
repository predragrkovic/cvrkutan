import {FC, useEffect, useState} from 'react';
import PostCard from 'components/molecules/PostCard';
import Post from 'models/Post';

import './style.scss';
import NewPost from '../NewPost';
import Pusher from 'pusher-js';
import User from 'models/User';
import {POSTS} from 'mock/dummy-data';

interface PostsProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsProps> = ({isRendered}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<string>('');
  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('imageUrl');

  useEffect(() => {
    const pusher = new Pusher('d6bf8ef287243e8f9e13', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('board');
    channel.bind('post', function (data: Post) {
      console.log(data);
      setPosts((post) => [...posts, data]);
    });
  }, []);

  const handleInputPost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost(e.target.value);
  };

  const handleNewPostClick = async () => {
    if (!newPost) return;
    if (!username) return;
    if (!profileImage) return;

    const user = new User(profileImage, username);
    const postToSend = new Post(user, 'Hello!', newPost);

    console.log(JSON.stringify(postToSend));

    await fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        postToSend,
      }),
    });

    setNewPost('');
  };

  return (
    <div className={`posts-container ${!isRendered && 'hide'}`}>
      <NewPost
        onButtonClick={handleNewPostClick}
        inputPost={newPost}
        handleInputPost={handleInputPost}
      />
      <div className="scroll-div">
        {POSTS.map((post: Post) => {
          return <PostCard key={post.user.username} post={post} />;
        })}
      </div>
    </div>
  );
};
