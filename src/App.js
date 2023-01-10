import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className='container'>
      <div className='todo-box'>
        <Header />
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
