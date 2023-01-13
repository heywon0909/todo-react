import React,{useCallback, useEffect, useReducer, useState} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import todoReducer from './reducer/todo-reducer';

export default function TodoContainer() {
    const [selectedType, setSelectedType] = useState('All');
    const handleType = (e) => { setSelectedType(e.target.innerText) };
     const initialTodo = [];
    const [todoList, dispatch] = useReducer(todoReducer, initialTodo);
   

    const handleAdd = useCallback(value => {
        console.log('value', value);
        let todo = { type: '', title: value };
        dispatch({ type: 'added', todo })
    }, []);
    const handleUpdated = useCallback((todo) => {
        dispatch({ type: 'updated', todo });
    }, []);
    const handleDeleted = useCallback((todo) => {
        dispatch({ type: 'deleted', todo });
    }, []);
    
    useEffect((todo) => {
        dispatch({ type: 'created' });
    }, []);
    
    
    return (
        <div className='todo-box'>
            <Header selectedType={selectedType} onClick={handleType} />
            <TodoList selectedType={selectedType} onUpdate={handleUpdated} onDelete={handleDeleted} todoList={todoList}  />
            <TodoCreate onAdd={handleAdd}/>
        </div>
    );
}

