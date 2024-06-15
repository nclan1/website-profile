'use client'
import styles from './style.module.scss'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { AnimatePresence } from "framer-motion";
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image'; 
// import profilePic from './Profile.jpg';  


export default function Header() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    
    useEffect (() => {
        gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {

        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent})
        gsap.set(secondText.current, {xPercent: xPercent})
        requestAnimationFrame(animate);
        xPercent += 0.02 * direction;
    }

    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.01,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    },[])

    return (
        <main className={styles.main}>
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText} className={styles.text}>nolan ngim - nolan ngim -</p>
                    <p ref={secondText} className={styles.text}>nolan ngim - nolan ngim -</p>
                </div>
            </div>
        
        </main>
    )

}