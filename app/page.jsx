'use client';
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

import Picture1 from './Gym.jpg'
import Picture2 from './Photo.jpg'
import Picture3 from './Read.jpg'

import Index from "./components/Preloader";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Profile from "@/object/Profile/Profile";
import MagneticWrapper from "@/object/Magnetic/MagneticWrapper";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import NotCoding from "@/object/NotCoding/NotCoding";

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

  const Slide = (props) => {
    return (
      <div style={{left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
      </div>
    )
  }
  
  const Phrase = ({src}) => {
    return (
      <div className={'px-5 flex gap-5 items-center'}>
        <p className='text-[3vw]'>not coding?</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
        </span>
      </div>
    )
  }


  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Index />}
      </AnimatePresence> */}
      <Header className="z-10"/>
      <Landing />
      <Profile />
      <About />
      <Projects className="z-50"/>
      {/* <NotCoding /> */}

      <div className="overflow-hidden">
        <div className="h-[20vh]"/>
        <Slide src={Picture1} left={"-40%"}/>
        <Slide src={Picture2} left={"-25%"}/>
        <Slide src={Picture3} left={"-75%"}/>
      </div>



      <section className="flex flex-col items-center gap-4">
      <MagneticWrapper>
          <div className="w-52 h-52 bg-red-400 rounded-full flex items-center justify-center">
            <MagneticWrapper>
              <h1 className="text-3xl">nolan</h1>
            </MagneticWrapper>
          </div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-orange-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-amber-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-yellow-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-lime-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-green-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-emerald-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-teal-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-cyan-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-red-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-orange-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-amber-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-yellow-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-lime-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-green-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-emerald-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
        
        <MagneticWrapper>
          <div className="w-52 h-52 bg-teal-400 rounded-full flex items-center justify-center"></div>
        </MagneticWrapper>
      </section>
    </main>
    
    
  );
}
