import Header from 'components/organisms/Header';
import {Card} from 'components/other/Card/Card';
import {useDarkTheme} from 'hooks/useDarkTheme';
import './App.scss';

function App() {
  const {darkTheme} = useDarkTheme();

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <Header />
      <Card accentColour="red"> </Card>
      <Card accentColour="red"> </Card>
      <Card accentColour="red"> </Card>
      <Card accentColour="red"> </Card>
    </div>
  );
}

export default App;
