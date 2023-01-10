import React from 'react';
import styles from '../css/todoList.module.css'
import {RiDeleteBin2Fill} from 'react-icons/ri'

export default function TodoList() {
    return (
        <div>
            <ul>
                <li>
                <div className={styles.todoItem}>
                    <input type='checkbox' />
                    공부하기
                    <div className={styles.deleteBtn}>
                            <RiDeleteBin2Fill className={styles.icon} />
                    </div>
                    </div>
                </li>
            </ul> 
        </div>
    );
}

