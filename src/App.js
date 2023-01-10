import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
function App() {
  return (
    <div className='container'>
      <div className='todo-box'>
        <Header />
        <TodoList />
        <TodoCreate/>
      </div>
    </div>
  );
}

export default App;
