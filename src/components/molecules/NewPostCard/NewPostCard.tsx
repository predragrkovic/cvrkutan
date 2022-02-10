import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC, useState} from 'react';
import './style.scss';
import config from '../../../config.json';

interface NewPostCardProps {}

export const NewPostCard: FC<NewPostCardProps> = () => {
  const {darkTheme} = useDarkTheme();

  const [newPost, setNewPost] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');

  const [isSending, setIsSending] = useState(false);

  const username = localStorage.getItem('username');
  const profileImage = localStorage.getItem('imageUrl');

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

    try {
      setIsSending(true);
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
      setNewTitle('');
    } catch (error: any) {
      console.log('Posting failed. Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`new-post-card-container ${darkTheme && 'dark'}`}>
      <input
        className={`new-post-title ${darkTheme && 'dark'}`}
        value={newTitle}
        onChange={handleInputTitle}
        placeholder="Наслов [опционално]..."
      />
      <textarea
        value={newPost}
        onChange={handleInputPost}
        className={`new-post-text ${darkTheme && 'dark'}`}
        placeholder="Подели своје мисли..."></textarea>
      <SubmitButton disabled={isSending} onSubmitClick={handleNewPostClick}>
        Подели
      </SubmitButton>
    </div>
  );
};
