

import styles from "./style.module.scss";
import Image from "next/image";
import profilePic from "./Profile.jpg";

export default function Profile(){
    return (
        <div className={styles.headline}>
            <Image 
            className={styles.profilePic}
            src={profilePic}
            alt='nolan ngim'
            />

            <h1 className={styles.school}>boston <a>uni</a></h1>
        </div>
        
    )
}