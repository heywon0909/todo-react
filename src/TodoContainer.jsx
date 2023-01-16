import React,{useCallback, useEffect, useReducer, useState} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import todoReducer from './reducer/todo-reducer';

export default function TodoContainer({darkMode,setDarkMode}) {
    const [selectedType, setSelectedType] = useState('All');
    
    const handleType = (e) => { setSelectedType(e.target.innerText) };
     const initialTodo = [];
    const [todoList, dispatch] = useReducer(todoReducer, initialTodo);
   

    const handleAdd = useCallback(value => {
        let todo = { type: 'Active', title: value };
        dispatch({ type: 'added', todo })
    }, []);
    const handleUpdated = useCallback((value) => {
        let todo = { type: 'Completed', title: value };
        dispatch({ type: 'updated', todo });
    }, []);
    const handleDeleted = useCallback((value) => {
        let todo = {type:'deleted',title:value}
        dispatch({ type: 'deleted', todo });
    }, []);
    
    useEffect((todo) => {
        dispatch({ type: 'created' });
    }, []);
    
    
    return (
        <div className='todo-box'>
            <Header selectedType={selectedType} onClick={handleType} darkMode={darkMode} setMode={setDarkMode}  />
            <TodoList selectedType={selectedType} onUpdate={handleUpdated} onDelete={handleDeleted} todoList={todoList} darkMode={darkMode} />
            <TodoCreate onAdd={handleAdd} darkMode={darkMode} />
        </div>
    );
}

