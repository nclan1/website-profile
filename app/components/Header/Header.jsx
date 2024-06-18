'use client';

import { useEffect, useState, useLayoutEffect, useRef} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./Nav/Nav";
import MagneticWrapper from "@/object/Magnetic/MagneticWrapper";


import styles from './style.module.scss'


export default function Header() {

    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect(() => {
        if(isActive) setIsActive(false);
    }, [pathname])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"}, setIsActive(false))}
            }
        })
    }, [])



    return (

        <>
        <div className={styles.header}>

            <MagneticWrapper>
                <div className={styles.logo}>
                    <div className={styles.name}>
                        <p className={styles.nolan}>nolan</p>
                        <p className={styles.ngim}>ngim</p>
                        <p className={styles.bug}> buggin'</p>
                    </div>
                    <p className={styles.year}>© 2024</p>
                </div>
            </MagneticWrapper>

            

            <div className={styles.nav}>
                <MagneticWrapper>
                     <div className={styles.anch}>
                        <a>about</a>
                        {/* <a className={styles.about}>about</a> */}
                        <div className={styles.indicator}></div>
                    </div>
                </MagneticWrapper>
               
                <div className={styles.anch}>
                    <a>work</a>
                    <div className={styles.indicator}></div>

                </div>
                <div className={styles.anch}>
                    <a>hobbies</a>
                    <div className={styles.indicator}></div>
                </div>
                <div className={styles.anch}>
                    <a>contact</a>
                    <div className={styles.indicator}></div>
                </div>
            </div>

        </div>

        <div ref={button} className={styles.headerButtonContainer}>

            {/* if isActive, then show the side bar */}
            <MagneticWrapper>
                <div>
                    <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </div>
                </div>
             
            </MagneticWrapper>

        </div>
        <AnimatePresence mode="wait">
                {isActive && <Nav />}
        </AnimatePresence>
        </>
        // <div className="flex justify-between p-16">

        //     <div className="text-2xl text-slate-500">
        //         nolan<br/>© 2024
        //     </div>

        //     <div className="flex items-center">
        //         <nav className="text-2xl flex gap-10">
        //             <a>about</a>
        //             <a>work</a>
        //             <a>hobbies</a>
        //             <a>contact</a>
        //         </nav>
        //     </div>

        // </div>
    )
}