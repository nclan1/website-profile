'use client';

import styles from "./style.module.scss";
import Image from "next/image";
import profilePic from "./Profile.jpg";
import { useRef } from "react";
import { slideUp, opacity } from "./anim";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

export default function Profile(){

    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    const words = useRef(null);
    const isInView = useInView(words)


    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
    
    return (
        <div className={styles.headline} ref={container}>
            {/* <div className="w-52 h-52 bg-orange-400 rounded-full flex items-center justify-center"></div>     */}
            <motion.h1 style={{y: lg}}>
                <div className={styles.profileContainer}>
                     <Image 
                        className={styles.profilePic}
                        src={profilePic}
                        alt='nolan ngim'
                        />
                </div>
               
            </motion.h1>
            

            <motion.h1 style={{y: md}}>
                <div className={styles.school}>
                    <h1>boston <a>uni</a></h1>
                    <h2>42°21’28’’N, 71°03’42”O</h2>
                </div>
            </motion.h1>
            
        </div>
        
    )
}