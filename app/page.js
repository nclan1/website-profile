'use client';
import { useEffect } from "react";
import Lenis from "lenis";

import Image from "next/image";

export default function Home() {

  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <body className="flex flex-col items-center ">
      <div className="w-52 h-52 bg-red-400 rounded-full"></div>
      <div className="w-52 h-52 bg-orange-400 rounded-full"></div>
      <div className="w-52 h-52 bg-amber-400 rounded-full"></div>
      <div className="w-52 h-52 bg-yellow-400 rounded-full"></div>
      <div className="w-52 h-52 bg-lime-400 rounded-full"></div>
      <div className="w-52 h-52 bg-green-400 rounded-full"></div>
      <div className="w-52 h-52 bg-emerald-400 rounded-full"></div>
      <div className="w-52 h-52 bg-teal-400 rounded-full"></div>
      <div className="w-52 h-52 bg-cyan-400 rounded-full"></div>
    </body>
    
  );
}
