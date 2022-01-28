// import PostCardContent from 'components/molecules/PostCardContent';
import PostCardContent from 'components/molecules/PostCardContent';
import Header from 'components/organisms/Header';
import {Card} from 'components/other/Card/Card';
import {useDarkTheme} from 'hooks/useDarkTheme';
import {POSTS} from 'mock/dummy-data';
import Post from 'models/Post';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Header />
      <div className={`screen-container`}>
        <div className="posts-container">
          {POSTS.map((post: Post) => {
            console.log(post);
            return (
              <Card key={post.user.username} color="secondary">
                <PostCardContent post={post} />
              </Card>
            );
          })}
        </div>
        <div className="chat-container"></div>
      </div>
    </div>
  );
}

export default App;
