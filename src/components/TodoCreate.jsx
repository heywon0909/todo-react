import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import styles from '../css/todoCreate.module.css';

export default function TodoCreate({onAdd}) {
    const context = useContext(DarkModeContext);
    const [text, setText] = useState('');
    return (
        <div className={!context.darkMode ? `${styles.container}` : `${styles.container}`}>
            <input type="text" placeholder='Add ToDo' onChange={(e) =>setText(e.target.value)} value={text} />
            <button className={styles.addBtn} onClick={() => {
                onAdd(text);
                setText('');
            }}>add</button>
        </div>
    );
}

