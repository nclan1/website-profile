'use client';
import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { AnimatePresence, useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

import Picture2 from './Lift.jpg'
import Picture1 from './Photo.jpg'
import Picture3 from './Read.jpg'

import Index from "./components/Preloader";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Profile from "@/object/Profile/Profile";
import MagneticWrapper from "@/object/Magnetic/MagneticWrapper";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Activity1 from "./components/Activity1/Activity1";
import Activity2 from "./components/Activity2/Activity2";
import Photography from "./components/Photography/Photography";
import Footer from "./components/Footer/Footer";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.6,
    });

    const onScroll = (e) => {
      console.log(e);
    };

    lenis.on('scroll', onScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    setTimeout( () => {
      setIsLoading(false);
    }, 2000)

  }, []); 





  // -----------------------notCoding component=========================

  const Slide = (props) => {

    const direction = props.direction === 'left' ? -1: 1;
    const translateX = useTransform(props.progress, [0, 1], [900 * direction, -900 * direction]);
    return (
      <motion.div style={{left: props.left, x: translateX}} className="relative flex whitespace-nowrap">
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
      </motion.div>
    )
  }
  
  const Phrase = ({src}) => {
    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-[5vw] font-medium text-[#524B4A]'>not coding?</p>
        <span className="relative h-[7vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
        </span>
      </div>
    )
  }

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

    // -----------------------notCoding component=========================


  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Index />}
      </AnimatePresence> */}
      <Header className="z-100"/>
      <Landing />
      <Profile />
      <About />
      <Projects className="z-50"/>
      {/* <NotCoding /> */}


      {/* // -----------------------notCoding component========================= */}

      <div className="overflow-hidden">
        <div className="h-[15vh]"/>
        <Slide src={Picture1} direction={"left"} left={"-40%"} progress={scrollYProgress}/>
        <Slide src={Picture2} direction= {"right"} left={"-55%"} progress={scrollYProgress}/>
        <Slide src={Picture3} direction={"left"} left={"-48%"} progress={scrollYProgress}/>
        <div className="h-[7.5vh]"/>
      </div>
      {/* // -----------------------notCoding component========================= */}
      <div className="flex justify-center">
        <h1 className=" text-5xl">i get up to some stuff <a className="text-xl opacity-50">like...</a></h1>
      </div>
      <div className="h-[9vh]"/>

      <Activity1 />
      <Activity2 />
      <Photography />
      <Footer />

    </main>
    
    
  );
}
