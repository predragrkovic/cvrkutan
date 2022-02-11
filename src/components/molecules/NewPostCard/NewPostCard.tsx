import SubmitButton from 'components/atoms/SubmitButton';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC, useState} from 'react';
import './style.scss';
import {axiosPost} from 'utilities/api';
import {POSTS_URL} from 'constants/paths';

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

      const body = {
        username: username,
        picture: profileImage,
        title: newTitle,
        content: newPost,
      };

      await axiosPost(POSTS_URL, body);

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
