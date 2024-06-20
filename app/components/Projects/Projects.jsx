
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useScroll } from 'framer-motion';
import Image from "next/image";
import gif from "./nevergiveup.gif";

import styles from './style.module.scss';

export default function Projects() {

    const col2Ref = useRef(null);
    const controls = useAnimation();

    const {scrollYProgress} = useScroll({
        target: col2Ref,
        offset: ['start end', 'end start']
    });

    return (
        <div className={styles.container}>
            <div className={styles.col1}>
                <p>relentlessly <a>learning</a>.</p>
                <h3>what i've made <span>(more coming...)</span></h3>
              

            </div>
            <div className={styles.col2}>

                <p> always on the pursuit for opportunities to create/solve/improve. love to collaborate (with you!)</p>
                <div>
                     <Image 
                    src={gif}
                    alt='never give up'
                    width={240}
                    height={240}
                    className={styles.gif}
                    />  
                </div>
               
            </div>
        </div>
    )
}