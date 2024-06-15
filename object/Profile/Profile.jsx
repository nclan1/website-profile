

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

            <div className={styles.school}>
                <h1>boston <a>uni</a></h1>
                <h2>42°21’28’’N, 71°03’42”O</h2>
            </div>
        </div>
        
    )
}