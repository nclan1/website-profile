'use client';

import { useEffect, useState, useLayoutEffect, useRef} from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import styles from './style.module.scss'


export default function Header() {
    return (

        <>
        <div className={styles.header}>

            <div className={styles.logo}>
                <div className={styles.name}>
                    <p className={styles.nolan}>nolan</p>
                    <p className={styles.ngim}>ngim</p>
                    <p className={styles.bug}> buggin'</p>
                </div>
                <p className={styles.year}>© 2024</p>
            </div>

            <div className={styles.nav}>
                <div className={styles.anch}>
                    <a>about</a>
                    <div className={styles.indicator}></div>
                </div>
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