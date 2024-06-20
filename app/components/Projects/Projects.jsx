
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import gif from "./nevergiveup.gif";
import MagneticWrapper from '@/object/Magnetic/MagneticWrapper';
import { projects } from './data';
import ProjectCards from './ProjectCards/ProjectCards';

import styles from './style.module.scss';

export default function Projects() {

    const col2Ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target: col2Ref,
        offset: ['start end', 'end start']
    });

    const translateX = useTransform(scrollYProgress, [0, 1], [100, 0]);

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
                        <p>relentlessly <a>learning</a>.</p>
                        <h3>what i've made <span>(more coming...)</span></h3>
                    

                    </div>
                    <div className={styles.col2} ref={col2Ref}>

                        <p> always looking for opportunities to create/solve/improve. love to collaborate (with you!)</p>
                        <motion.div style={{x: translateX}}>

                            <MagneticWrapper>
                                <Image 
                            src={gif}
                            alt='never give up'
                            className={styles.gif}
                            />  
                            </MagneticWrapper>
                            
                        </motion.div>
                    
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    {projects.map((project, index) => (
                        <ProjectCards key={index} i={index} title={project.title} description={project.description} link={project.link} github={project.github}/>
                    ))}
                </div>


            </div>
    )
}