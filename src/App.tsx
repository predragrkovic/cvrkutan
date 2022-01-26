import {ThemeContext} from 'contexts/ThemeContext';
import {useContext} from 'react';
import './App.scss';

function App() {
  const {goDark, darkTheme} = useContext(ThemeContext);

  const handleClick = () => {
    goDark(true);
  };

  return (
    <div className={`app ${darkTheme && 'dark'}`}>
      <p>Hello World!</p>
      <button onClick={handleClick}>Go Dark</button>
    </div>
  );
}

export default App;
