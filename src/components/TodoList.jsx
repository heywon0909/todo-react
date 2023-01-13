import React,{useState} from 'react';
import styles from '../css/todoList.module.css'
import {RiDeleteBin2Fill} from 'react-icons/ri'

export default function TodoList({todoList, selectedType }) {
    console.log('todoList', todoList);
    // const [todoList, setTodoList] = useState([]);
    const [checked, setChecked] = useState(false);
  
    const handleChecked = (todo) => {
        setChecked(prev => !prev); 
    }
   
    return (
        <div className={styles.container}>
            <ul>
                {
                    todoList.map((todo)=>{
                        return (
                        <li key={todo.title}>
                            <div className={styles.todoItem}>
                                    <input type='checkbox' value={checked} onChange={handleChecked} />
                                {todo.title}
                                <div className={styles.deleteBtn}>
                                    <RiDeleteBin2Fill className={styles.icon} />
                                </div>
                            </div>
                        </li>
                        )
                    })
                }
                
            </ul> 
        </div>
    );
}

