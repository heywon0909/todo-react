import React,{useState} from 'react';
import styles from '../css/todoList.module.css'
import {RiDeleteBin2Fill} from 'react-icons/ri'

export default function TodoList({todoList, selectedType,onUpdate,onDelete,darkMode}) {
    const [checked, setChecked] = useState(false);
  
    const handleChecked = (e) => {
        let value = e.target.parentElement.innerText;
        e.target.parentElement.classList.add(styles.checked)
        onUpdate(value);
        setChecked(prev => !prev); 
    }
    const handleDelete = (e) => {
        let value = e.currentTarget.parentElement.innerText;
        onDelete(value);
    }
    
    return (
        <div className={!darkMode ? `${styles.container}` :`${styles.container} ${styles.dark}`}>
            <ul>
                {
                    // eslint-disable-next-line array-callback-return
                    todoList.map((todo) => {
                        if (selectedType === 'All') {
                                return (
                                    <li key={todo.title}>
                                        <div className={todo.type !=='Completed'? `${styles.todoItem}` : `${styles.todoItem} ${styles.checked}`}>
                                            <input type='checkbox' value={todo.type === 'Completed' ? true : checked} onChange={handleChecked} disabled={todo.type === 'Completed' ? true : false} />
                                            {todo.title}
                                            <button className={styles.deleteBtn} onClick={handleDelete}>
                                                <RiDeleteBin2Fill className={styles.icon}/>
                                            </button>
                                        </div>
                                    </li>
                                )
                        } else {
                            if (selectedType === todo.type) {
                             return (
                                    <li key={todo.title}>
                                        <div className={todo.type !=='Completed'? `${styles.todoItem}` : `${styles.todoItem} ${styles.checked}`}>
                                                <input type='checkbox' value={todo.type==='Completed'? true : checked} onChange={handleChecked} disabled={todo.type === 'Completed' ? true : false} />
                                            {todo.title}
                                            <button className={styles.deleteBtn} onClick={handleDelete}>
                                                <RiDeleteBin2Fill className={styles.icon}/>
                                            </button>
                                        </div>
                                    </li>
                                )
                            }
                        }
                                   
                    })
                }
                
            </ul> 
        </div>
    );
}

