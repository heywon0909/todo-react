import React,{useState} from 'react';
import styles from '../css/todoList.module.css'
import {RiDeleteBin2Fill} from 'react-icons/ri'

export default function TodoList({todoList, selectedType,onUpdate }) {
    console.log('todoList', todoList);
    // const [todoList, setTodoList] = useState([]);
    const [checked, setChecked] = useState(false);
  
    const handleChecked = (todo) => {
        console.log('todo', todo);
        onUpdate(todo);
        setChecked(prev => !prev); 
    }
   
    return (
        <div className={styles.container}>
            <ul>
                {
                    // eslint-disable-next-line array-callback-return
                    todoList.map((todo) => {
                        if (todo.type === selectedType) {
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
                        
                        }
                       
                    })
                }
                
            </ul> 
        </div>
    );
}

