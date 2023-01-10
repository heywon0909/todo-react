import React,{useState} from 'react';
import styles from '../css/header.module.css'
import {IoSettingsSharp} from 'react-icons/io5'


export default function Header() {
    const [selectedType, setSelectedType] = useState('All');
    const [typeList, setTypeList] = useState(['All', 'Active', 'Completed'])
    const handleType = (e)=> setSelectedType(e.target.innerText)
    return (
        <div className={styles.header}>
            <div className={styles.settingBtn}>
                <IoSettingsSharp />
            </div>
            <div className={styles.todoType}>
                {typeList.map((type) =>(
                    <div className={`${selectedType === type ? styles.on : ''}`} key={type} onClick={handleType}>{type}</div>
                ))}
            </div>
        </div>
    );
}

