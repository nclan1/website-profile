
import styles from "./style.module.scss";
import MagneticWrapper from "@/object/Magnetic/MagneticWrapper";
import Rounded from "@/object/RoundedButton/Rounded";
import { slideUp } from "../About/anim";

import { useEffect, useState, useRef} from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";


export default function Footer() {

    const [time, setTime] = useState();
    const cont = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cont,
        offset: ['start end', 'end end']
    })

    const containerTitle = useRef(null);
    const isInViewTitle = useInView(containerTitle);


    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])

    const title = "want to connect?";

    useEffect(() => {
        function updateTime() {
            const options = {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/New_York'
            };

            let timeString = new Intl.DateTimeFormat('en-US', options).format(new Date());
            timeString = timeString.replace('AM', 'am').replace('PM', 'pm');
            setTime(timeString);

        }

        updateTime();

        const intervalId = setInterval(updateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);
    

    return (
        <motion.div style={{y}} className={styles.container} ref={cont}>

            <div className={styles.connect}>
                <div className={styles.header}>
                    <p ref={containerTitle}>
                        {
                            title.split(" ").map((words, i) => {
                                return <span key={i} className={styles}>
                                    <motion.span variants={slideUp} custom={i} initial='initial' animate={isInViewTitle ? "open" : "closed"}>
                                        {words==="connect?" ? <a>{words}</a>: words}
                                    </motion.span>
                                </span>
                            })
                        }
                    </p>
                </div>

                <div className={styles.divider}>
                    <div className={styles.line}></div>
                    <p>message button</p>
                </div>

                <div className={styles.buttons}>
                    <MagneticWrapper>
                        <div>
                            <a href="mailto:ngimcnolan@gmail.com" target="_blank">
                                <Rounded className={styles.button}>
                                    <p>ngimcnolan@gmail.com</p>
                                </Rounded>
                            </a>
                        </div>
                    </MagneticWrapper>
                    <MagneticWrapper>
                        <div>
                            <a href="https://drive.google.com/file/d/1ziixt4UtF_GkDDsX1iM0T5Udsp6cfau2/view?usp=sharing" target="_blank">
                                <Rounded className={styles.button2}>
                                    <p>resume!</p>
                                </Rounded>
                            </a>
                        </div>
                    </MagneticWrapper>
                </div>
            </div>

            <div className={styles.foot}>
                <h1>© 2024 <br />nolan</h1>
                <p><span>local time: </span><br /> {time} edt</p>
                <div className={styles.an}>

                    <h2 className="opacity-50">social</h2>
                    <div className="flex flex-row gap-8">
                        <MagneticWrapper>
                            <div className={styles.anch}>
                                <a href="https://github.com/nclan1" target="_blank">github</a>
                            </div>
                        </MagneticWrapper>
    
                        <MagneticWrapper>
                            <div className={styles.anch}>
                                <a href="https://www.instagram.com/mr_lan1213/" target="_blank">instagram</a>
                            </div>
                        </MagneticWrapper>
    
                        <MagneticWrapper>
                            <div className={styles.anch}>
                                <a href="https://www.linkedin.com/in/cnnolan/" target="_blank">linkedin</a>
                            </div>
                        </MagneticWrapper>
    
                        <MagneticWrapper>
                            <div className={styles.anch}>
                                <a href="https://medium.com/@nclan1" target="_blank">medium</a>
                            </div>
                        </MagneticWrapper>
                    </div>
                    
                </div>
            </div>
        </motion.div>
    )
}