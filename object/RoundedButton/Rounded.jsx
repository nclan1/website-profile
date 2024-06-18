
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';


export default function Rounded({ children, backgroundColor="purple", ...attributes}) {



    const circle = useRef(null);

    const manageMouseEnter = (e) => {}


    const manageMouseLeave = (e) => {}


    return (
        <div className={styles.roundedButton} {...attributes} onMouseEnter={(e) => {manageMouseEnter(e)}}
        onMouseLeave={(e) => {manageMouseLeave(e)}}>

            {
                children
            }
            <div ref={circle} className={styles.circle} style={{backgroundColor}}></div>

        </div>
    )
}