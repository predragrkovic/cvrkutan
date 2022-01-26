import {useDarkTheme} from 'hooks/useDarkTheme';
import './App.scss';

function App() {
  const {setDarkTheme, darkTheme} = useDarkTheme();

  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <p>Hello World!</p>
      <button onClick={handleClick}>{darkTheme ? 'Go Light' : 'Go Dark'}</button>
    </div>
  );
}

export default App;
