import './App.css';
import { useState } from 'react';
import TodoContainer from './TodoContainer';
import Header from './components/Header';

function App() {
  const menus = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(menus[0]);
  return (
      <>
      <Header filter={filter} menus={menus} onFilterChange={setFilter} />
        <TodoContainer />
      </>
  );
}

export default App;
