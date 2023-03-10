import React,{useState,useContext} from 'react';
import styles from '../css/header.module.css'
import {IoSettingsSharp} from 'react-icons/io5'
import { DarkModeContext } from '../context/DarkModeContext';


 function Header({selectedType, onClick}){
     const context = useContext(DarkModeContext);
     const [typeList] = useState(['All', 'Active', 'Completed'])
    
 
     return (
        
         <div className={!context.darkMode ? `${styles.header}` : `${styles.header} ${styles.dark}`} >
            <div className={styles.settingBtn} onClick={()=>context.toggleDarkMode()}>
                <IoSettingsSharp color={!context.darkMode ? '#000':'#fff'}/>
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