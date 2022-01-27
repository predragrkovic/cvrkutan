import User from './User';

class Post {
  user: User;
  title: string;
  content: string;

  constructor(user: User, title: string, content: string) {
    this.user = user;
    this.title = title;
    this.content = content;
  }
}

export default Post;
