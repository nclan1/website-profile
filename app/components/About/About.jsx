
import styles from './style.module.scss';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { slideUp, opacity, slideUpBezier } from './anim';
import { useRef } from 'react';



export default function About() {

    const description1 = "my name is chanrithya ngim but you can call me nolan! i'm an incoming 3rd year cs student and i enjoy a nice cup of iced coffee (sweetened condensed milk please)."
    const description2 = "i do a little coding some time. i enjoy front end work but i aspire to be a full-stack dev (even if some don't believe in fullstack...)"

    const container = useRef(null);
    const container2 = useRef(null);
    const isInView = useInView(container);
    const isInView2 = useInView(container2);

    const cont = useRef(null);
    const {scrollYProgress} = useScroll({
        target: cont,
        offset: ['start end', 'end start']
    })

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <div className={styles.container}>
            
            <div className={styles.title} ref={cont}>
                <motion.h1 style={{y: md}}>
                    <div className={styles.line}></div>
                </motion.h1>
                
                {/* <motion.h1 variants={slideUpBezier} initial="initial" animate={isInView ? "open" : "closed"}>who?</motion.h1> */}
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
                    <motion.span variants={opacity} initial="initial" animate={isInView2 ? "open" : "closed"}>
                        find more about me:
                    </motion.span>
                
                </p>
            </div>

        </div>
    )
}