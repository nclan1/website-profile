
import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Linki from '../Link/Link';
import Curve from '../Curve/Curve';

const navItems = [
    {
        title: "about",
        href: "/"
    },
    {
        title: "work",
        href: "/work"
    },
    {
        title: "hobbies",
        href: "/hobbies"
    },
    {
        title: "contact",
        href: "/contact"
    }
]

export default function index() {

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className={styles.menu}
            >
            <div className={styles.body}>
                
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>looking for something?</p>
                        <hr className="h-px mt-5 mb-10 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                    <div>
                        {
                        navItems.map( (data, index) => {
                            return <Linki
                            key={index}
                            data={{... data, index}}
                            isActive={selectedIndicator === data.href}
                            setSelectedIndicator={setSelectedIndicator}>
                            </Linki>
                        })
                    }
                    </div>
                </div>

                <div className={styles.contact}>
                    ngimcnolan@gmail.com
            
                    <div className={styles.footer}>
                        <a>linkedin</a>
                        <a>instagram</a>
                        <a>medium</a>
                    </div>
                </div>
            </div>
            <Curve />

        </motion.div>
    )
}