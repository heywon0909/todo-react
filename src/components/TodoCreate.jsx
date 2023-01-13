import React, { useState } from 'react';
import styles from '../css/todoCreate.module.css';

export default function TodoCreate({onAdd}) {
    
    const [text, setText] = useState('');
    return (
        <div className={styles.container}>
            <input type="text" placeholder='Add ToDo' onChange={(e) =>setText(e.target.value)} value={text} />
            <button className={styles.addBtn} onClick={() => {
                onAdd(text);
                setText('');
            }}>add</button>
        </div>
    );
}

