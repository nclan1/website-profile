
import styles from './style.module.scss';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { slideUp, opacity, slideUpBezier } from './anim';
import { useRef } from 'react';
import Rounded from '@/object/RoundedButton/Rounded';
import MagneticWrapper from '@/object/Magnetic/MagneticWrapper';



export default function About() {

    const title = "who?";
    const description1 = "my name is chanrithya ngim but you can call me nolan! i'm an incoming 3rd year cs student and i enjoy a nice cup of iced coffee (sweetened condensed milk please)."
    const description2 = "i do a little coding some time. i enjoy front end work but i aspire to be a full-stack dev (even if some don't believe in fullstack...)"

    const container = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);
    const containerTitle = useRef(null);
    const isInViewTitle = useInView(containerTitle);
    const isInView = useInView(container);
    const isInView2 = useInView(container2);

    const cont = useRef(null);
    const {scrollYProgress} = useScroll({
        target: cont,
        offset: ['start end', 'end start']
    })

    const {scrollYProgress: scrollYProgress1} = useScroll({
        target: container3,
        offset: ['start end', 'end start']
    });


   


    const lineWidth = useTransform(scrollYProgress, [0, 1], [300, 600])

    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, 210]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const translateX = useTransform(scrollYProgress1, [0, 1], [0, -270]);

    return (
        <div className={styles.container}>
            
            <div className={styles.title} ref={cont}>
               
                <motion.div className={styles.line} style={{ width: lineWidth}}></motion.div>
                <h1 ref={containerTitle}>
                    {
                        title.split("").map((letter, i) => {
                            return <span key={i} className={styles.mask}>
                                <motion.span variants={slideUp} custom={i} initial='initial' animate={isInViewTitle ? "open" : "closed"}>
                                    {letter}
                                </motion.span>
                            </span>
                        })
                    }
                </h1>
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

                <p className="opacity-50" ref={container2}>
                    <motion.span variants={opacity} initial="initial" animate={isInView2 ? "open" : "closed"}>
                        find more about me:
                    </motion.span>
                
                </p>
            </div>

            <div className={styles.moreAbout} ref={container3}>
                {/* <motion.div className={styles.circle} style={{x: translateX}}></motion.div> */}
                <motion.div style={{x: translateX}} >
                    <MagneticWrapper>
                        <div>
                            <Rounded className={styles.circle}>
                                <p>here!</p>
                            </Rounded>
                        </div>
                    </MagneticWrapper>
                </motion.div>
            </div>

        </div>
    )
}