import Header from 'components/organisms/Header';
import {Card} from 'components/other/Card/Card';
import {useDarkTheme} from 'hooks/useDarkTheme';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Header />
      <div className="screen-container">
        <div className="left">
          <div className="posts">
            <Card accentColour="red"> </Card>
          </div>
        </div>
        <div className={`right ${darkTheme && 'dark'}`}>
          <Card accentColour="red"></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
