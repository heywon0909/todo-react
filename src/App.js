
import { useContext } from 'react';
import './App.css';
import { DarkModeContext } from './context/DarkModeContext';
import TodoContainer from './TodoContainer';


function App() {
  const context = useContext(DarkModeContext);
  return (
      <div className={!context.darkMode ? 'outContainer' : 'outContainer dark'}>
        <TodoContainer />
      </div>
  );
}

export default App;
