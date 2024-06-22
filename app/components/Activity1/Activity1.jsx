import styles from "./styles.module.scss";

import bigbook from "./bigbook.JPG";
import cafenero from "./cafenero.JPG";
import Quran from "./Quran.jpg";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Activity1() {

    const container = useRef(null);
    const word = "literature";

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    })

  

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
            {
                src: bigbook,
                y: 0
            },
            {
                src: cafenero,
                y: lg
            },
            {
                src: Quran,
                y: md
            }
        ]

    return (
        <div ref={container} className={styles.container}>
            

            <div className={styles.images}>something</div>

            <div className={styles.words}>

                <div className={styles.body}>
                    <motion.h1 style={{y: sm}}>partaking in</motion.h1>
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