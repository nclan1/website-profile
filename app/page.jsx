'use client';
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Index from "./components/Preloader";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Profile from "@/object/Profile/Profile";
import MagneticWrapper from "@/object/Magnetic/MagneticWrapper";
import About from "./components/About/About";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
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


  return (
    <main>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Index />}
      </AnimatePresence> */}
      <Header />

      {/* <div className='h-1 w-full bg-black opacity-20'></div> */}
      <Landing />
      {/* <div className='h-1 w-full bg-black mt-48 opacity-20'></div> */}
      <Profile />
      <About />

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
