import { useState } from 'react';
import './App.css';
import TodoContainer from './TodoContainer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={!darkMode ? 'outContainer' : 'outContainer dark'}>
      <TodoContainer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
