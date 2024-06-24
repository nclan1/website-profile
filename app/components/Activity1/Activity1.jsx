'use client';

import styles from "./styles.module.scss";

import bigbook from "./bigbook.JPG";
import cafenero from "./cafenero.JPG";
import Quran from "./Quran.jpg";

import { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Activity1() {

    const container = useRef(null);
    const word = "literature";
    const imagesRef = useRef([]);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    })

  

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
            {
                src: cafenero,
                y: 0
            },
            {
                src: bigbook,
                y: lg
            },
            {
                src: Quran,
                y: sm
            }
        ]

    return (
        <div ref={container} className={styles.container}>
            

            <div className={styles.images}>
                {
                    images.map(({src, y}, i) => {
                        return <motion.div style = {{y}} key={`i_${i}`} className={styles.imageContainer}>
                            <Image src={src} alt="image" fill />
                            
                            </motion.div>
                    })
                }
            </div>

            <div className={styles.words}>

                <div className={styles.body}>
                    <motion.h1 style={{y: sm}}>partake in</motion.h1>
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
            
        </div>
    )
}