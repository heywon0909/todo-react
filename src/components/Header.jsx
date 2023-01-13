import React,{useState} from 'react';
import styles from '../css/header.module.css'
import {IoSettingsSharp} from 'react-icons/io5'


 function Header({ selectedType, onClick }){
   
    const [typeList] = useState(['All', 'Active', 'Completed'])
   
    return (
        <div className={styles.header}>
            <div className={styles.settingBtn}>
                <IoSettingsSharp />
            </div>
            <div className={styles.todoType}>
                {typeList.map((type) => (
                    <div className={`${selectedType === type ? styles.on : ''}`} key={type} onClick={onClick}>{type}</div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Header);