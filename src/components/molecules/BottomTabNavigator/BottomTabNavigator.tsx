import {useDarkTheme} from 'hooks/useDarkTheme';
import {FC} from 'react';
import {FaRegCommentDots, FaRegNewspaper} from 'react-icons/fa';
import './style.scss';

interface BottomTabNavigatorProps {
  renderChoice: 'chat' | 'posts';
  handlePostsClick: () => void;
  handleChatClick: () => void;
}

export const BottomTabNavigator: FC<BottomTabNavigatorProps> = ({
  renderChoice,
  handlePostsClick,
  handleChatClick,
}) => {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`buttons-container ${darkTheme && 'dark'}`}>
      <div
        onClick={handlePostsClick}
        className={`button ${renderChoice === 'posts' && 'selected'}`}>
        <FaRegNewspaper size={renderChoice === 'posts' ? 35 : 25} />
      </div>
      <div onClick={handleChatClick} className={`button ${renderChoice === 'chat' && 'selected'}`}>
        <FaRegCommentDots size={renderChoice === 'chat' ? 35 : 25} />
      </div>
    </div>
  );
};
