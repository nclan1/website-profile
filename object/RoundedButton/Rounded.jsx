
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';


export default function Rounded({ children, backgroundColor="#FF6969", ...attributes}) {



    const circle = useRef(null);
    const timeline = useRef(null);
    let timeoutId = null;

    useEffect(() => {
        timeline.current = gsap.timeline({paused: true})
        timeline.current
        .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
        .to(circle.current, {top: "-150%", width: "125%", duration: 0.35}, "exit")
    }, [])

    const manageMouseEnter = (e) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        timeline.current.tweenFromTo("enter", "exit");
    }


    const manageMouseLeave = (e) => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300)
    }


    return (
        <div className={styles.roundedButton} {...attributes} style={{overflow: "hidden"}} onMouseEnter={(e) => {manageMouseEnter(e)}}
        onMouseLeave={(e) => {manageMouseLeave(e)}}>

            {
                children
            }
            <div ref={circle} className={styles.circle} style={{backgroundColor}}></div>

        </div>
    )
}