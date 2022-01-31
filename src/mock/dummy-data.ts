import Post from 'models/Post';
import User from 'models/User';

export const USERS: User[] = [
  new User('https://avatarfiles.alphacoders.com/217/217489.jpg', 'xXxbabyyoda1337xXx'),
  new User('https://avatarfiles.alphacoders.com/102/102783.jpg', 'theRealRock1'),
];

export const POSTS: Post[] = [
  new Post(USERS[0], 'Здраво Свима', 'На овај сајт, дођох'),
  new Post(
    USERS[1],
    'Добродошао Бебо Јода',
    'Лорем ипсум долор сит амет, цонсецтетуер адиписцинг елит. Аенеан цоммодо лигула егет долор. Енејска маса. Цум социос натокуе пенатибус ет магнис дис партуриент монтес, насцетур ридицулус мус. Донец куам фелис, ултрициес нец, пеллентескуе еу, претиум куис, сем. Нулла цонсекуат масса куис еним.',
  ),
];
