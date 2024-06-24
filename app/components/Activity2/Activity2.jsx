'use client';

import styles from "./styles.module.scss";

import guitar from "./guitar.png";
import joker from "./joker.png";
import talent from "./talent.JPG";

import { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Activity2() {

    const container = useRef(null);
    const word = "strings";
    const imagesRef = useRef([]);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    })

  

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
            {
                src: talent,
                y: 0
            },
            {
                src: guitar,
                y: lg
            },
            {
                src: joker,
                y: md
            }
        ]

    return (
        <div ref={container} className={styles.container}>
            

            <div className={styles.words}>

                <div className={styles.body}>
                    <motion.h1 style={{y: sm}}>dabble in</motion.h1>
                </div>
                <p>
                    {
                        word.split("").map((letter, i) => {
                            const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
                            return <motion.span style={{top: y}} key={`l_${i}`}>{letter}</motion.span>
                        })
                    }
                </p>
            </div>


            <div className={styles.images}>
                {
                    images.map(({src, y}, i) => {
                        return <motion.div style = {{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image src={src} alt="image" fill />
                            
                            </motion.div>
                    })
                }
            </div>
            
        </div>
    )
}