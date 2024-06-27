'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp, slideUpLetter } from './anim'
import styles from './style.module.scss'

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height: 0})
    const words = "hey there :)";
    const words2 = "nolan © 2024";


    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    // useEffect( () => {
    //     if(index == words.length - 1) return;
    //     setTimeout( () => {
    //         setIndex(index + 1)
    //     }, index == 0 ? 1000 : 150)
    // }, [index])

   
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 1.1, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 1.1, ease: [0.76, 0, 0.24, 1]}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
            <>
                <p>
                    {
                        words.split(" ").map((word, i) => {
                            return <span key={i} className={styles.mask}>
                                <motion.span variants={slideUpLetter} custom={i} initial='initial' animate="open" exit='exit'>
                                    {word}    
                                </motion.span>
                            </span>
                        })
                    }
                </p>
                {/* <p className="mt-32">
                    {
                        words2.split(" ").map((word, i) => {
                            return <span key={i} className={styles.mask}>
                                <motion.span variants={slideUpLetter} custom={i} initial='initial' animate="open" exit='exit'>
                                    {word}    
                                </motion.span>
                            </span>
                        })
                    }
                </p> */}
                {/* <motion.p variants={slideUpLetter} initial="initial" animate="open">hey there</motion.p> */}
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )


}