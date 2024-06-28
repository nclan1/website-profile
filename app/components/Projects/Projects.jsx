
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform, useInView } from 'framer-motion';
import Image from "next/image";
import gif from "./nevergiveup.gif";
import MagneticWrapper from '@/object/Magnetic/MagneticWrapper';
import { projects, slideUp } from './data';
import ProjectCards from './ProjectCards/ProjectCards';

import styles from './style.module.scss';
import Rounded from '@/object/RoundedButton/Rounded';

export default function Projects() {

    const col2Ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: col2Ref,
        offset: ['start end', 'end start']
    });

    const translateX = useTransform(scrollYProgress, [0, 1], [100, 0]);

    const learning = "relentlessly";
    const relent = "learning";

    const containerTitle = useRef(null);
    const isInViewTitle = useInView(containerTitle);
    const containerTitle1 = useRef(null);
    const isInViewTitle1 = useInView(containerTitle1);

    // const [isSticky, setIsSticky] = useState(false);
    
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const topPosition = col2Ref.current.getBoundingClientRect().top;
    //         const stickyTrigger = 25;
    //         setIsSticky(topPosition <= stickyTrigger);
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    return (
            <div className={styles.bigCont}>
                <div className={styles.container}>
                    <div className={styles.col1}>
                        <div className='flex flex-col gap-0'>
                            <p ref={containerTitle}>
                                {
                                    learning.split("").map((letter, i) => {
                                        return <span key={i} className={styles}>
                                            <motion.span variants={slideUp} custom={i} initial='initial' animate={isInViewTitle ? "open" : "closed"}>
                                                {letter==="a"  ? <a>{letter}</a>: letter}
                                            </motion.span>
                                        </span>
                                    })
                                }
                            </p>
                            <p ref={containerTitle1}>
                                {
                                    relent.split("").map((letter, i) => {
                                        return <span key={i} className={styles}>
                                            <motion.span variants={slideUp} custom={i} initial='initial' animate={isInViewTitle1 ? "open" : "closed"}>
                                                <a>{letter}</a>
                                            </motion.span>
                                        </span>
                                    })
                                }
                            </p>
                        </div>
                        <h3>what i've made <span>(more coming...)</span></h3>
                    

                    </div>
                    <div className={styles.col2} ref={col2Ref}>

                        <p> always looking for opportunities to create/solve/improve. love to collaborate (with you!)</p>
                        <motion.div>

                            <a href="https://www.youtube.com/watch?v=KxGRhd_iWuE" target="_blank">
                                <MagneticWrapper>
                                    <Image 
                                src={gif}
                                alt='never give up'
                                className={styles.gif}
                                />  
                                </MagneticWrapper>
                            </a>
                            
                        </motion.div>
                    
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    {projects.map((project, index) => (
                        <ProjectCards key={index} i={index} title={project.title} description={project.description} link={project.link} github={project.github}/>
                    ))}
                </div>

                <div  className='self-center m-0 pb-16'>
                    <MagneticWrapper>
                        <div>
                            <a href="https://github.com/nclan1" target="_blank">
                                <Rounded className={styles.button}>
                                    <p>more</p>
                                </Rounded>
                            </a>
                        </div>
                    </MagneticWrapper>
                </div>

            </div>
    )
}