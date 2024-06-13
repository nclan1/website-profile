'use client';
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";
import Index from "./components/Preloader";
import Image from "next/image";
import Header from "./components/Header/Header";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
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
      <AnimatePresence mode="wait">
        {isLoading && <Index />}
      </AnimatePresence>
      <Header />
      <section className="flex flex-col items-center gap-4">
        <div className="w-52 h-52 bg-red-400 rounded-full"></div>
        <div className="w-52 h-52 bg-orange-400 rounded-full"></div>
        <div className="w-52 h-52 bg-amber-400 rounded-full"></div>
        <div className="w-52 h-52 bg-yellow-400 rounded-full"></div>
        <div className="w-52 h-52 bg-lime-400 rounded-full"></div>
        <div className="w-52 h-52 bg-green-400 rounded-full"></div>
        <div className="w-52 h-52 bg-emerald-400 rounded-full"></div>
        <div className="w-52 h-52 bg-teal-400 rounded-full"></div>
        <div className="w-52 h-52 bg-cyan-400 rounded-full"></div>
        <div className="w-52 h-52 bg-red-400 rounded-full"></div>
        <div className="w-52 h-52 bg-orange-400 rounded-full"></div>
        <div className="w-52 h-52 bg-amber-400 rounded-full"></div>
        <div className="w-52 h-52 bg-yellow-400 rounded-full"></div>
        <div className="w-52 h-52 bg-lime-400 rounded-full"></div>
        <div className="w-52 h-52 bg-green-400 rounded-full"></div>
        <div className="w-52 h-52 bg-emerald-400 rounded-full"></div>
        <div className="w-52 h-52 bg-teal-400 rounded-full"></div>
        <div className="w-52 h-52 bg-cyan-400 rounded-full"></div>
      </section>
    </main>
    
    
  );
}
