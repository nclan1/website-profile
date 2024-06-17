
import styles from './style.module.scss';
import { motion, useInView } from 'framer-motion';
import { slideUp, opacity } from './anim';
import { useRef } from 'react';



export default function About() {

    const description1 = "my name is chanrithya ngim but you can call me nolan! i'm an incoming 3rd year cs student and i enjoy a nice cup of iced coffee (sweetened condensed milk please)."
    const description2 = "i do a little coding some time. i enjoy front end work but i aspire to be a full-stack dev (even if some don't believe in fullstack...)"

    const container = useRef(null);
    const container2 = useRef(null);
    const isInView = useInView(container);
    const isInView2 = useInView(container2);

    return (
        <div className={styles.container}>
            
            <div className={styles.title}>
                <div className={styles.line}></div>
                <h1>who?</h1>
            </div>

            <div className={styles.body}>
                
                <p ref={container}>
                    {
                        description1.split(" ").map((word, i) => {
                            return <span key={i} className={styles.mask}>
                                        <motion.span variants={slideUp} custom={i} initial='initial' animate={isInView ? "open" : "closed"}>
                                            {word==="nolan!" ? <strong>{word}</strong> : word}
                                        </motion.span>
                                    </span>
                        })
                    }
                </p>
                <p ref={container2}>
                    {
                        description2.split(" ").map((word, i) => {
                            return <span key={i} className={styles.mask}>
                                        <motion.span variants={slideUp} custom={i} initial='initial' animate={isInView2 ? "open" : "closed"}>
                                            {word}
                                        </motion.span>
                                   </span>
                        })
                    }
                </p>

                <p ref={container2}>
                    find more about me:
                </p>
            </div>

        </div>
    )
}