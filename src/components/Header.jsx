import React,{useContext} from 'react';
import styles from '../css/header.module.css'
import {IoSettingsSharp} from 'react-icons/io5'
import { DarkModeContext } from '../context/DarkModeContext';


 function Header({filter,menus, onFilterChange}){
     const context = useContext(DarkModeContext);
    
    
 
     return (
        
         <div className={!context.darkMode ? `${styles.header}` : `${styles.header} ${styles.dark}`} >
            <div className={styles.settingBtn} onClick={()=>context.toggleDarkMode()}>
                <IoSettingsSharp color={!context.darkMode ? '#000':'#fff'}/>
            </div>
            <ul className={styles.todoType}>
                {menus.map((filter,index) => (
                    <button key={index}>{filter}</button>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(Header);