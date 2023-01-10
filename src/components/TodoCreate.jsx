import React, { useState } from 'react';
import styles from '../css/todoCreate.module.css';

export default function TodoCreate() {
   const [todoItem,setTodoItem] = useState('')
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Add ToDo' onChange={(e)=>setTodoItem(e.target.value)}/>
            <button className={styles.addBtn} onClick={() => {
                if (!localStorage.todo) {
                    localStorage.todo = [todoItem];
                } else {
                    let arr = [localStorage.todo,todoItem];
                    localStorage.todo = arr;
                }
            }}>add</button>
        </div>
    );
}

