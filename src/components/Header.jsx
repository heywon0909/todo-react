import React,{useState} from 'react';
import styles from '../css/header.module.css'
import {IoSettingsSharp} from 'react-icons/io5'


 function Header({selectedType, onClick,darkMode,setMode}){
   
     const [typeList] = useState(['All', 'Active', 'Completed'])
     const handleMode = () => {
         setMode(prev => !prev);
         if (darkMode) {
            
         }
     }
 
     return (
        
         <div className={!darkMode ? `${styles.header}` : `${styles.header} ${styles.dark}`} >
            <div className={styles.settingBtn} onClick={handleMode}>
                <IoSettingsSharp color={!darkMode ? '#000':'#fff'}/>
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