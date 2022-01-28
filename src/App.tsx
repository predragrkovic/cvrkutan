// import PostCardContent from 'components/molecules/PostCardContent';
import ProfilePicture from 'components/atoms/ProfilePicture';
import NewPostCardContent from 'components/molecules/NewPostCardContent';
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
        <div className="padding-div"></div>
        <div className="posts-container">
          <div className="new-post-container">
            <div className="profile-picture-container">
              <ProfilePicture source="https://avatarfiles.alphacoders.com/217/217489.jpg" />
            </div>
            <Card>
              <NewPostCardContent />
            </Card>
          </div>

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
        <div className="padding-div"></div>
      </div>
    </div>
  );
}

export default App;
