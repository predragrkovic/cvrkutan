import {FC, useState} from 'react';
import PostCard from 'components/molecules/PostCard';
import Post from 'models/Post';

import './style.scss';
import NewPost from '../NewPost';
import User from 'models/User';
import {POSTS} from 'mock/dummy-data';

interface PostsProps {
  isRendered: boolean;
}

export const PostsContainer: FC<PostsProps> = ({isRendered}) => {
  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('imageUrl');

  const [newPost, setNewPost] = useState<string>('');

  // const posts: Post[] = usePusher('board', 'post');

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
