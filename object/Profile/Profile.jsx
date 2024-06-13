

import styles from "./style.module.scss";
import Image from "next/image";
import profilePic from "./Profile.jpg";

export default function Profile(){
    return (
        <Image 
        className={styles.profilePic}
        src={profilePic}
        alt='nolan ngim'
        />
    )
}