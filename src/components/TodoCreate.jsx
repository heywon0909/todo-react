import React from 'react';
import styles from '../css/todoCreate.module.css';

export default function TodoCreate() {
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Add ToDo' onInput={(e)=>console.log(e.target.value)}/>
            <button className={styles.addBtn}>add</button>
        </div>
    );
}

