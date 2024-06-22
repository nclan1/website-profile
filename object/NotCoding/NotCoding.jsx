'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from './Gym.jpg'
import Picture2 from './Photo.jpg'
import Picture3 from './Read.jpg'

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function NotCoding() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })


  return (
    <>
      <div className='h-[100vh]'/>
        <div ref={container}>
          <Slide src={Picture1} direction={'left'} left={"-40%"}/>
          <Slide src={Picture2} direction={'right'} left={"-25%"}/>
          <Slide src={Picture3} direction={'left'}  left={"-75%"}/>
        </div>
      <div className='h-[100vh]' />
    </>
  );
}

const Slide = (props) => {
  return (
    <div style={{left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
      <Phrase src={props.src}/>
    </div>
  )
}

const Phrase = ({src}) => {
  return (
    <div className={'px-5 flex gap-5 items-center'}>
      <p className='text-[7.5vw]'>not coding?</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{objectFit: "cover"}} src={src} alt="image" fill/>
      </span>
    </div>
  )
}