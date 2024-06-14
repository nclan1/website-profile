
import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Linki from '../Link/Link';

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
            className={styles.menu}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            >
            <div className={styles.body}>
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
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
                <div className={styles.footer}>
                    <a>linkedin</a>
                    <a>instagram</a>
                    <a>medium</a>
                </div>
            </div>

        </motion.div>
    )
}