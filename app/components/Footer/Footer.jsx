
import styles from "./style.module.scss";
import MagneticWrapper from "@/object/Magnetic/MagneticWrapper";
import Rounded from "@/object/RoundedButton/Rounded";

import { useEffect, useState} from "react";

export default function Footer() {

    const [time, setTime] = useState();

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
        <div className={styles.container}>

            <div className={styles.connect}>
                <div className={styles.header}>
                    <p>want to <a className="text-emerald-300">connect?</a></p>
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
                            <a href="https://drive.google.com/file/d/12oe76xhrm0rmqaEhRISNM_z8Sjm681gk/view?usp=sharing" target="_blank">
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
                <p>
                    <span>socials</span><br />
                    
                </p>
            </div>
        </div>
    )
}