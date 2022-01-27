import Post from 'models/Post';
import User from 'models/User';

export const USERS: User[] = [
  new User('https://avatarfiles.alphacoders.com/217/217489.jpg', 'xXxbabyyoda1337xXx'),
  new User('https://avatarfiles.alphacoders.com/102/102783.jpg', 'theRealRock1'),
];

export const POSTS: Post[] = [
  new Post(USERS[0], 'Hello :)', 'my first post'),
  new Post(
    USERS[1],
    'Welcome :)',
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.',
  ),
];
