
import { useRef } from "react";
import styles from "./style.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";

import Image from "next/image";
import flowers from "./images/flowers.jpg";
import couple from "./images/couple.jpg";
import dog from "./images/dog.jpg";
import lights from "./images/lights.jpg";
import street from "./images/street.jpg";
import jog from "./images/jog.jpg";
import chill from "./images/chill.jpg";


export default function Photography() {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pictures = [
        {
            src: flowers,
            scale: scale4
        },
        {
            src: couple,
            scale: scale5
        },
        {
            src: dog,
            scale: scale6
        },
        {
            src: lights,
            scale: scale5
        },
        {
            src: chill,
            scale: scale6
        },
        {
            src: jog,
            scale: scale8
        },
        {
            src: street,
            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({src, scale}, index) => {
                        return <motion.div key={index} style={{scale}} className={styles.el}>
                            <div className={styles.imgContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>

        </div>
    )
}